const supabase = require("./client");

function averageCalculator(restaurants) {
  const restaurantesComMedia = restaurants.map((restaurante) => {
    if (restaurante.Avaliacao.length > 0) {
      const notas = restaurante.Avaliacao.map((avaliacao) => avaliacao.nota);
      const media = notas.reduce((total, nota) => total + nota, 0) / notas.length;
      const mediaArredondada = parseFloat(media.toFixed(1));
      return { ...restaurante, mediaNotas: mediaArredondada };
    } else {
      return { ...restaurante, mediaNotas: null };
    }
  });
  return restaurantesComMedia;
}

const eatsyService = {

  async getAllRestaurants() {
    let { data: restaurantes, error } = await supabase
      .from('Restaurante')
      .select('*, Avaliacao(nota),Foto(imagem),Categoria(nome)')

    if (error) {
      console.error("Erro ao buscar dados do Supabase:", error);
      return null;
    }
    return averageCalculator(restaurantes);
  },

  async getRestaurantById(id) {
    let { data: restaurante, error } = await supabase
      .from('Restaurante')
      .select('*, Avaliacao(comentario,nota,Usuario(*)),Foto(imagem),Categoria(nome)')
      .eq('id_restaurante', id)

    if (error) {
      console.error("Erro ao buscar dados do Supabase:", error);
      return null;
    }
    return averageCalculator(restaurante);
  },

  async getRestaurantsByCategory(categoryId) {
    let { data: restaurantes, error } = await supabase
      .from('Restaurante')
      .select('*, Avaliacao(nota),Foto(imagem),Categoria(nome)')
      .eq('categoria', categoryId)

    if (error) {
      console.error("Erro ao buscar dados do Supabase:", error);
      return null;
    }
    return averageCalculator(restaurantes);
  },

  async searchRestaurantsByName(search) {
    let { data: restaurantes, error } = await supabase
      .from('Restaurante')
      .select('id_restaurante,nome,Foto(imagem)')
      .ilike('nome', `%${search}%`);
  
    if (error) {
      console.error("Erro ao buscar dados do Supabase:", error);
      return null;
    }
    return restaurantes;
  },

  async getTopRatedRestaurants() {
    let { data: restaurantes, error } = await supabase
      .from('Restaurante')
      .select('*, Avaliacao(nota),Foto(imagem),Categoria(nome)')

    if (error) {
      console.error("Erro ao buscar dados do Supabase:", error);
      return null;
    }
    const restaurantesComMedia = averageCalculator(restaurantes);
  
    const restaurantesOrdenados = restaurantesComMedia.sort((a, b) => b.mediaNotas - a.mediaNotas);
  
    const top4Restaurantes = restaurantesOrdenados.slice(0, 4);

    return top4Restaurantes;
  },

  async getRecommendedRestaurants() {
    let { data: restaurantes, error } = await supabase
      .from('Restaurante')
      .select('*, Avaliacao(nota),Foto(imagem),Categoria(nome)')
  
    if (error) {
      console.error("Erro ao buscar dados do Supabase:", error);
      return null;
    }

      const restaurantesEmbaralhados = restaurantes.sort(() => Math.random() - 0.5);

      const recomendados = restaurantesEmbaralhados.slice(0, 8);

      return averageCalculator(recomendados);
  },
  
  async getAllCategories() {
    let { data: Categories, error } = await supabase
      .from('Categoria')
      .select('*')

    if (error) {
      console.error("Erro ao buscar dados do Supabase:", error);
      return null;
    }
    return Categories;
  },

  async getAllUsers() {
    let { data: Usuarios, error } = await supabase
      .from('Usuario')
      .select('*')

    if (error) {
      console.error("Erro ao buscar dados do Supabase:", error);
      return null;
    }
    return Usuarios;
  },

}

module.exports = eatsyService;
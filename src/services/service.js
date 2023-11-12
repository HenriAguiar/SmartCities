const supabase = require("./client");

function averageCalculator(restaurantes) {
  const restaurantesComMedia = restaurantes.map((restaurante) => {
    if (restaurante.Avaliacao.length > 0) {
      const notas = restaurante.Avaliacao.map((avaliacao) => avaliacao.nota);
      const media = notas.reduce((total, nota) => total + nota, 0) / notas.length;
      return { ...restaurante, mediaNotas: media };
    } else {
      return { ...restaurante, mediaNotas: null };
    }
  });
  return restaurantesComMedia;
};

const eatsyService = {

  async getAllRestaurants() {
    let { data: Restaurantes, error } = await supabase
      .from('Restaurante')
      .select('*, Avaliacao(nota),Foto(imagem),Categoria(nome)')

    if (error) {
      console.error("Erro ao buscar dados do Supabase:", error);
      return null;
    }
    return averageCalculator(Restaurantes);
  },

  async getRestaurantById(id) {
    let { data: Restaurante, error } = await supabase
      .from('Restaurante')
      .select('*, Avaliacao(comentario,nota,Usuario(*)),Foto(imagem),Categoria(nome)')
      .eq('id_restaurante', id)

    if (error) {
      console.error("Erro ao buscar dados do Supabase:", error);
      return null;
    }
    return averageCalculator(Restaurante);
  },

  async getRestaurantsByCategory(categoryId) {
    let { data: Restaurantes, error } = await supabase
      .from('Restaurante')
      .select('*, Avaliacao(nota),Foto(imagem),Categoria(nome)')
      .eq('categoria', categoryId)

    if (error) {
      console.error("Erro ao buscar dados do Supabase:", error);
      return null;
    }
    return averageCalculator(Restaurantes);
  },

  async searchRestaurantsByName(search) {
    let { data: Restaurantes, error } = await supabase
      .from('Restaurante')
      .select('id_restaurante,nome,Foto(imagem)')
      .ilike('nome', `%${search}%`);
  
    if (error) {
      console.error("Erro ao buscar dados do Supabase:", error);
      return null;
    }
    return Restaurantes;
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
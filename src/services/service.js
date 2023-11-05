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
    let { data: Restaurante, error } = await supabase
      .from('Restaurante')
      .select('*, Avaliacao(nota),Foto(imagem)')

    if (error) {
      console.error("Erro ao buscar dados do Supabase:", error);
      return null;
    }
    return averageCalculator(Restaurante);
  },

  async getAllUsers() {
    let { data: Usuario, error } = await supabase
      .from('Usuario')
      .select('*')

    if (error) {
      console.error("Erro ao buscar dados do Supabase:", error);
      return null;
    }
    console.log(Usuario)
    return Usuario;
  },

  async getRestaurantById(id) {
    let { data: Restaurante, error } = await supabase
      .from('Restaurante')
      .select('*, Avaliacao(comentario,nota,Usuario(*)),Foto(imagem)')
      .eq('id_restaurante', id)

    if (error) {
      console.error("Erro ao buscar dados do Supabase:", error);
      return null;
    }
    return averageCalculator(Restaurante);
  },

}

module.exports = eatsyService;
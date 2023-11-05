const supabase = require("./client");

const eatsyService = {

    async getAllRestaurants() {
        let { data: Restaurante, error } = await supabase
        .from('Restaurante')
        .select('*')

        if (error) {
          console.error("Erro ao buscar dados do Supabase:", error);
          return null;
        }
        console.log(Restaurante)
        return Restaurante;
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
      

}

module.exports = eatsyService;
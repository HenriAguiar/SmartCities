const eatsyService = require("./service");

async function testGetAllRestaurants() {
    try {
      const restaurants = await eatsyService.getAllRestaurants();
      if (restaurants) {
        console.log("Restaurantes:", restaurants);
      } else {
        console.log("Erro ao buscar restaurantes.");
      }
    } catch (error) {
      console.error("Erro inesperado:", error);
    }
  }

async function testGetAllUsers() {
    try {
      const users = await eatsyService.getAllUsers();
      if (users) {
        console.log("Usuarios:", users);
      } else {
        console.log("Erro ao buscar restaurantes.");
      }
    } catch (error) {
      console.error("Erro inesperado:", error);
    }
  }


testGetAllRestaurants();
testGetAllUsers()
  
const eatsyService = require("./service");

async function testGetAllRestaurants() {
  try {
    const restaurants = await eatsyService.getAllRestaurants();
    if (restaurants) {
      console.log("Restaurantes:", restaurants[3]);
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

async function testGetRestaurantById() {
  try {
    const restaurant = await eatsyService.getRestaurantById(4);
    if (restaurant) {
      console.log("Restaurante:", restaurant[0]);
    } else {
      console.log("Erro ao buscar restaurantes.");
    }
  } catch (error) {
    console.error("Erro inesperado:", error);
  }
}

testGetRestaurantById();
testGetAllRestaurants();
testGetAllUsers();

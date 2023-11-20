const eatsyService = require("./service");

async function testGetAllRestaurants() {
  try {
    const restaurants = await eatsyService.getAllRestaurants();
    if (restaurants) {
      console.log("Restaurantes:", restaurants[5]);
    } else {
      console.log("Erro ao buscar restaurantes.");
    }
  } catch (error) {
    console.error("Erro inesperado:", error);
  }
}

async function testGetTopRatedRestaurants() {
  try {
    const restaurants = await eatsyService.getTopRatedRestaurants();
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

async function testGetRestaurantById() {
  try {
    const restaurant = await eatsyService.getRestaurantById(5);
    if (restaurant) {
      console.log("Restaurante:", restaurant[0]);
    } else {
      console.log("Erro ao buscar restaurantes.");
    }
  } catch (error) {
    console.error("Erro inesperado:", error);
  }
}

async function testGetRestaurantByCategory() {
  try {
    const restaurant = await eatsyService.getRestaurantsByCategory(1);
    if (restaurant) {
      console.log("Restaurantes:", restaurant);
    } else {
      console.log("Erro ao buscar restaurantes.");
    }
  } catch (error) {
    console.error("Erro inesperado:", error);
  }
}

async function testsearchRestaurantsByName() {
  try {
    const restaurant = await eatsyService.searchRestaurantsByName('Pizza');
    if (restaurant) {
      console.log("Restaurante:", restaurant);
    } else {
      console.log("Erro ao buscar restaurante.");
    }
  } catch (error) {
    console.error("Erro inesperado:", error);
  }
}

async function testGetAllCategories() {
  try {
    const categorias = await eatsyService.getAllCategories();
    if (categorias) {
      console.log("Categorias:", categorias);
    } else {
      console.log("Erro ao buscar categorias.");
    }
  } catch (error) {
    console.error("Erro inesperado:", error);
  }
}

async function testGetRecommendedRestaurants() {
  try {
    const restaurant = await eatsyService.getRecommendedRestaurants();
    if (restaurant) {
      console.log("Restaurante:", restaurant);
    } else {
      console.log("Erro ao buscar restaurante.");
    }
  } catch (error) {
    console.error("Erro inesperado:", error);
  }
}

testGetRestaurantById(1);
//testGetAllRestaurants();
//testGetAllUsers();
//testGetAllCategories();
//testGetRestaurantByCategory();
//testsearchRestaurantsByName();
//testGetTopRatedRestaurants()
//testGetRecommendedRestaurants()
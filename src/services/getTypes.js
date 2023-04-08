const axios = require("axios");
const { Type } = require("../db");
const url = "https://pokeapi.co/api/v2/type";


const getTypesPokemons = async () => {
  try {
    const response = await axios.get(url);
    //obtiene los resultados y los mapea para extraer solo el nombre
    const types = response.data.results.map(type => ({ name: type.name }));
    //itero sobre cada tipo para verificar si existe en la base de datos
    types.forEach(async type => {
      //y si no existe, lo crea
      await Type.findOrCreate({ where: { name: type.name } });
    });
    //devuelve todos los types desde la base de datos
    return Type.findAll();
  } catch (error) {
    // Si hay un error, lanza una excepción con un mensaje de error
    throw new Error("Oops! Algo salió mal");
  }
};

module.exports = getTypesPokemons;

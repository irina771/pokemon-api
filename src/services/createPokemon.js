const { Pokemon, Type } = require("../db");

const createPokemon = async (data) => {
  const { nombre, vida, ataque, defensa, velocidad, altura, peso, types } = data;

  const newPokemon = await Pokemon.create({
    nombre,
    vida,
    ataque,
    defensa,
    velocidad,
    altura,
    peso,
  });

  const tiposDB = await Type.findAll({ where: { name: types } });
  await newPokemon.addTypes(tiposDB);

  return newPokemon;
};

module.exports = createPokemon;






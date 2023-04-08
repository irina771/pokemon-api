const { Pokemon, Type } = require('../db');

const getPokemonsBDD = async () => {
  const data = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
    },
  });
  return data;
};

module.exports = getPokemonsBDD;

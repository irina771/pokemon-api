const { Router } = require("express");
const getPokemonsBDD = require("../services/getPokemonsBDD");
const getPokemons = require("../services/getPokemons");
const joinResponsePokemons = require("../helpers/joinresponsePokemons");
const router = Router();

const filterPokemons = (pokemons, name) => {
  return pokemons.filter(pokemon => pokemon.name && pokemon.name.toLowerCase().includes(name.toLowerCase()));
};
;

router.get("/", async (req, res, next) => {
  const { name } = req.query;
  try {
    let responseApi = await getPokemons();
    let responseBDD = await getPokemonsBDD();
    
    if (name) {
      responseApi = filterPokemons(responseApi, name);
      responseBDD = filterPokemons(responseBDD, name);
    }

    let response = joinResponsePokemons(responseApi, responseBDD);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
    next(error);
  }
});

module.exports = router;


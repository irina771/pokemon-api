const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getPokemons = require("./getAllPokemons");
const getTypesPokemons = require("./getTypesPokemons");
const getPokemonId = require("./getPokemonById");
const createPokemons = require("./createPokemons");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemons", getPokemons);
router.use("/", getPokemonId);
router.use("/types", getTypesPokemons);
router.use("/createPokemons", createPokemons);

module.exports = router;

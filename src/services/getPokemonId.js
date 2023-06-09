const { Pokemon, Type } = require("../db");
const getAllPokemons = require("./getPokemons");

const getPokemonId = async (id)=>{
    try {
        let pokemon = {}
        if (id.includes("-")) {
            pokemon = await Pokemon.findByPk(id, {
                include :{
                    model: Type,
                    attributes: ['name'],
                }
            });
            return pokemon
        } 
        pokemon = await getAllPokemons();
        pokemon = pokemon.find( e => e.id === parseInt(id))
        return pokemon;
    } catch (error) {
        throw new Error("Oops! Algo salió mal")
    }
}

module.exports = getPokemonId;


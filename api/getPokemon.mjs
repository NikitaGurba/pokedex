import { Pokedex } from "pokeapi-js-wrapper";

const pokedex = new Pokedex();

export const getPokemon = async (name) => {
  const pokemon = await pokedex.getPokemonByName(name);
  return pokemon
};

import { Pokedex } from "pokeapi-js-wrapper";

const pokedex = new Pokedex({cache: true});

export const getPokemon = async (name: string) => {
  let pokemon;
  try {
    pokemon = await pokedex.getPokemonByName(name);
  } finally {
    return pokemon;
  }
};

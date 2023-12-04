import { Pokedex } from "pokeapi-js-wrapper";

const pokedex = new Pokedex();

export const getDescription = async (id) => {
  const species = await pokedex.getPokemonSpeciesByName(id);
  return species.flavor_text_entries[0].flavor_text.replaceAll('\n', ' ')
};

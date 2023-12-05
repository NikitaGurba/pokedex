import { Pokedex } from "pokeapi-js-wrapper";

const pokedex = new Pokedex({cache: true});

export const getDescription = async (id) => {
  const species = await pokedex.getPokemonSpeciesByName(id);
  let enIndexes = []
  species.flavor_text_entries.map((item, index) => {
    
    if (item.language.name === "en") {
        enIndexes.push(index)
    }
  });
  return species.flavor_text_entries[enIndexes[enIndexes.length - 2]].flavor_text.replaceAll("\n", " ")
};

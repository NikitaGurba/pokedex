import { Pokedex } from "pokeapi-js-wrapper";

const pokedex = new Pokedex();

export const getAbility = async (name) => {
  const ability = await pokedex.getAbilityByName(name);
  let enIndexes = []
  ability.flavor_text_entries.map((item, index) => {
    
    if (item.language.name === "en") {
        enIndexes.push(index)
    }
  });
  return ability.flavor_text_entries[enIndexes[enIndexes.length - 2]].flavor_text
};

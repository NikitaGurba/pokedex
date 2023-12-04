import { Pokedex } from "pokeapi-js-wrapper";

const pokedex = new Pokedex();

export const getAbility = async (name) => {
  const ability = await pokedex.getAbilityByName(name);
  return ability.flavor_text_entries[0].flavor_text
};

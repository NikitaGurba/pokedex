import { Pokedex } from "pokeapi-js-wrapper";

const pokedex = new Pokedex({cache: true});

export const getAbility = async (name: string) => {
  const ability = await pokedex.getAbilityByName(name);
  let enIndexes: number[] = []
  ability.flavor_text_entries.map((item: {language: {name: string}}, index: number) => {
    
    if (item.language.name === "en") {
        enIndexes.push(index)
    }
  });
  return ability.flavor_text_entries[enIndexes[enIndexes.length - 2]].flavor_text
};

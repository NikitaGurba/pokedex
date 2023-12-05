import { Pokedex } from "pokeapi-js-wrapper";

const pokedex = new Pokedex({cache: true});

export const getWeaknesses = async (name) => {
  const type = await pokedex.getTypeByName(name);
  const result = [];
  type.damage_relations.double_damage_from.map((item) => {
    result.push(item.name);
  });
  return result;
};

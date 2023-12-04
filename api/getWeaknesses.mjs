import { Pokedex } from "pokeapi-js-wrapper";

const pokedex = new Pokedex();

export const getType = async (name) => {
  const type = await pokedex.getTypeByName(name);
  const result = [];
  type.damage_relations.double_damage_from.map((item) => {
    result.push(item.name);
  });
  return result;
};

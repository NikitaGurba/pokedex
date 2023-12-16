import { Pokedex } from "pokeapi-js-wrapper";

const pokedex = new Pokedex({cache: true});

export const getWeaknesses = async (name: string) => {
  const type = await pokedex.getTypeByName(name);
  const result: string[] = [];
  type.damage_relations.double_damage_from.map((item: {name: string}) => {
    result.push(item.name);
  });
  return result;
};

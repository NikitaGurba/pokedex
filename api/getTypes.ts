import { Pokedex } from "pokeapi-js-wrapper";

const pokedex = new Pokedex({cache: true});

export const getTypes = async () => {
  const types = await pokedex.getTypesList();
  return types;
};

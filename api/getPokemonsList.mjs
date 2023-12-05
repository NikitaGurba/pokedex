import { Pokedex } from "pokeapi-js-wrapper";

const pokedex = new Pokedex({cache: true});

export const getPokemonList = async (interval) => {
    const resp = await pokedex.getPokemonsList(interval)
    return resp
};

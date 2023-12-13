import { getPokemon } from "~/api/getPokemon.mjs";
export const useRandomPokemonsStore = defineStore("randomPokemons", {
  state: () => ({
    list: [],
  }),
  actions: {
    async loadRandom(names) {
      this.list = [];
      for (let i = 0; i < names.length; i++)
      {
        this.list.push(await getPokemon(names[i]))
      }
    },
  },
});

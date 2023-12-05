import { getPokemonList } from "~/api/getPokemonsList.mjs";
import { getPokemon } from "~/api/getPokemon.mjs";
export const usePokemonListStore = defineStore("list", {
  state: () => ({
    list: []
  }),
  actions: {
    async getList(interval) {
      const resp = await getPokemonList(interval);
      for (let i = 0; i < resp.results.length; i++)
      {
        let temp = await getPokemon(resp.results[i].name);
        this.list.push(temp)
      }
      return this.list
    },
  },
});

import { getPokemonList } from "~/api/getPokemonsList.mjs";
import { getPokemon } from "~/api/getPokemon.mjs";
const LOAD_NUM = 50;
export const usePokemonListStore = defineStore("list", {
  state: () => ({
    list: [],
    searchList: [],
    interval: {
      offset: 0,
      limit: LOAD_NUM,
    },
    pageList: [],
    currentLoad: undefined,
  }),
  actions: {
    async loadNext() {
      const resp = await getPokemonList(this.interval);
      this.interval.offset += LOAD_NUM;
      for (let i = 0; i < resp.results.length; i++) {
        this.currentLoad = (i+1)*2
        let temp = await getPokemon(resp.results[i].name);
        this.list.push(temp);
      }
      this.currentLoad = 0
    },
  },
});

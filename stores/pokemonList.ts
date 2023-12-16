import { getPokemonList } from "~/api/getPokemonsList";
import { getPokemon } from "~/api/getPokemon";
const LOAD_NUM = 50;
type State = {list: Array<any>; interval: {[item: string]: number}; pageList: Array<any>; currentLoad:number }
export const usePokemonListStore = defineStore("list", {
  state: (): State => ({
    list: [],
    interval: {
      offset: 0,
      limit: LOAD_NUM,
    },
    pageList: [],
    currentLoad: 0,
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

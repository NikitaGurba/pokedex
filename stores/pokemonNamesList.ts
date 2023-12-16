import { getPokemonList } from "~/api/getPokemonsList";
type State = {listNames: string[]}
export const usePokemonNamesListStore = defineStore("listNames", {
  state: (): State => ({
    listNames: [],
  }),
  actions: {
    async getListNames() {
      if (this.listNames.length === 0) {
        const resp = await getPokemonList();
        const count = resp.count;
        const interval = {
          offset: 0,
          limit: count,
        };
        const respFull = await getPokemonList(interval);
        respFull.results.map((item: {name: string}) => {
          this.listNames.push(item.name);
        });
      }
    },
  },
});

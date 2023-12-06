import { getPokemonList } from "~/api/getPokemonsList.mjs";
export const usePokemonNamesListStore = defineStore("listNames", {
  state: () => ({
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
        respFull.results.map((item) => {
          this.listNames.push(item.name);
        });
      }
    },
  },
});

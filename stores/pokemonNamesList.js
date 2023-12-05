import { getPokemonList } from "~/api/getPokemonsList.mjs";
export const usePokemonNamesListStore = defineStore("list", {
  state: () => ({
    list: [],
  }),
  actions: {
    async getList() {
      const resp = await getPokemonList();
      const count = resp.count;
      console.log(count)
      const interval = {
        offset: 0,
        limit: count,
      };
      const respFull = await getPokemonList(interval);
      respFull.results.map(item => {
        this.list.push(item.name)
      })
    },
  },
});

import { getTypes } from "~/api/getTypes.mjs";
export const useTypesStore = defineStore("types", {
  state: () => ({
    types: [],
    selectedTypes: []
  }),
  actions: {
    async getTypes() {
      const resp = await getTypes();
      resp.results.map((item) => {
        this.types.push(item.name);
      });
    },
  },
});

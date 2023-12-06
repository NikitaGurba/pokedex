import { getTypes } from "~/api/getTypes.mjs";
export const useTypesStore = defineStore("types", {
  state: () => ({
    types: [],
    selectedTypes: [],
  }),
  actions: {
    async getTypes() {
      if (this.types.length === 0) {
        const resp = await getTypes();
        resp.results.map((item) => {
          this.types.push(item.name);
        });
      }
    },
  },
});

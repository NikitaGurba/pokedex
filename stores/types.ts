import { getTypes } from "~/api/getTypes";
export const useTypesStore = defineStore("types", {
  state: () => ({
    types: <types>[],
    selectedTypes: <types>[],
  }),
  actions: {
    async getTypes() {
      if (this.types.length === 0) {
        const resp = await getTypes();
        resp.results.map((item: {name: string}) => {
          this.types.push(item.name);
        });
      }
    },
  },
});

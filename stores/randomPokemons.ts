import { getPokemon } from "~/api/getPokemon";
type State = {
  list: Array<any>
}
export const useRandomPokemonsStore = defineStore("randomPokemons", {
  state: (): State => ({
    list: [],
  }),
  actions: {
    async loadRandom(names: string[]) {
      this.list = [];
      for (let i = 0; i < names.length; i++)
      {
        this.list.push(await getPokemon(names[i]))
      }
    },
  },
});

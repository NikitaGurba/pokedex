import { getPokemon } from "~/api/getPokemon";
import { getDescription } from "~/api/getDescription";
import { getAbility } from "~/api/getAbilityDescription";
import { getWeaknesses } from "~/api/getWeaknesses";

export const usePokemonStore = defineStore("pokemon", {
  state: () => ({
    pokemon: <pokemon>{},
  }),
  actions: {
    async getPokemonData(name: string) {
      const resp = await getPokemon(name);
      const abilityId = resp.abilities[0].ability.url
        .split("ability")[1]
        .replaceAll("/", "");
      let types: string[] = [];
      resp.types.map((item: {type: {name: string}}) => {
        types.push(item.type.name);
      });
      let weaknesses: string[] = [];
      types.map(async (type: string) => {
        let arr: string[] = await getWeaknesses(type);
        weaknesses.push(...arr);
        weaknesses = weaknesses.filter((el: string) => {
          return types.indexOf(el) < 0;
        });
        weaknesses = [...new Set(weaknesses)];
      });
      let stats: Array<stat> = [];
      resp.stats.map((item: {stat: {name: string}; base_stat: number}) => {
        stats.push({
          [item.stat.name.replace("-", " ")]: Math.floor(
            item.base_stat / 10 - 1
          ),
        });
      });

      this.pokemon = {
        name: resp.name,
        id: resp.id,
        description: await getDescription(resp.id),
        imageUrl: resp.sprites.other["official-artwork"].front_default,
        characteristics: {
          height: resp.height / 10,
          weight: resp.weight / 10,
          gender: ["m", "f"],
          abilities: {
            name: resp.abilities[0].ability.name.replace('-', ' '),
            description: await getAbility(abilityId),
          },
        },
        types: types,
        weaknesses: weaknesses,
        stats: stats,
      };
    },
  },
});

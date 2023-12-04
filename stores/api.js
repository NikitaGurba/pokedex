import { getPokemon } from "~/api/getPokemon.mjs";
import { getDescription } from "~/api/getDescription.mjs";
import { getAbility } from "~/api/getAbilityDescription.mjs";
import { getType } from "~/api/getWeaknesses.mjs";
export const usePokemonStore = defineStore("pokemon", {
  state: () => ({
    pokemon: { name: "Pokemon", id: "0" },
  }),
  actions: {
    async getPokemonData(name) {
      const resp = await getPokemon(name);
      const abilityId = resp.abilities[0].ability.url
        .split("ability")[1]
        .replaceAll("/", "");
      let types = [];
      resp.types.map((item) => {
        types.push(item.type.name);
      });
      let weaknesses = [];
      types.map(async (type) => {
        let arr = await getType(type);
        weaknesses.push(...arr);
        weaknesses = weaknesses.filter((el) => {
          return types.indexOf(el) < 0;
        });
        weaknesses = [...new Set(weaknesses)];
      });
      let stats = [];
      resp.stats.map((item) => {
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

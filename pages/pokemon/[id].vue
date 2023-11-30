<script setup>
const route = useRoute();
const router = useRouter();
const store = useHeaderData();
console.log(store.title);
let pokemons;
const pokemon = ref(null);
const id = ref(0);
const { pending } = await useFetch("/data.json", {
  server: false,
  onResponse({ request, response, options }) {
    pokemons = response._data.pokemons;
    if (store.pokemonNames.length === 0) {
      for (let i = 0; i < pokemons.length; i++) {
        store.pokemonNames.push(pokemons[i].name);
      }
    }
    for (let i = 0; i < pokemons.length; i++) {
      if (pokemons[i].name === route.params.id) {
        pokemon.value = pokemons[i];
        id.value = i;
        store.title = pokemon.value.name;
        store.id = pokemon.value.id;
        break;
      }
    }
  },
});
const routing = (direction) => {
  router.push({ path: pokemons[id.value + direction].name });
};

// const color = (name) => {
//   if (name === "fire") return "blue";
// };
</script>

<template>
  <div class="flex flex-row" v-if="!pending">
    <div
      class="flex items-center h-screen pr-8 pl-8 cursor-pointer hover:bg-gray-50 hover:bg-opacity-50 hover:dark:bg-opacity-5 hover:dark:bg-BSBlueDark"
      @click="routing(-1)"
    >
      <Button icon="pi pi-arrow-left" class="h-16" @click="routing(-1)" />
    </div>
    <article class="w-5/6 m-auto mt-24 flex flex-row gap-4 justify-center">
      <div class="w-1/6">
        <Card>
          <template #content>
            <Image :src="pokemon.imageUrl" alt="Image" preview />
          </template>
        </Card>
        <div class="flex flex-col gap-4 w-full mt-4">
          <CardWithBadges title="Types" :array="pokemon.type" />
          <CardWithBadges title="Weaknesses" :array="pokemon.weaknesses" />
        </div>
        <Chars :characteristics="pokemon.characteristics" class="w-full mt-4" />
      </div>
      <div class="w-2/6">
        <Card class="w-fit mb-4" :pt="{ content: 'text-lg p-0', title: 'p-0' }">
          <template #title>
            <p>Description</p>
          </template>
          <template #content>
            <p>
              {{ pokemon.description }}
            </p>
          </template>
        </Card>
        <Card class="w-full" :pt="{ content: 'p-0' }">
          <template #content>
            <Bar :stats="pokemon.stats" />
          </template>
        </Card>
      </div>
    </article>
    <div
      class="flex items-center h-screen pr-8 pl-8 cursor-pointer hover:bg-gray-50 hover:bg-opacity-50 hover:dark:bg-opacity-5 hover:dark:bg-BSBlueDark"
      @click="routing(1)"
    >
      <Button icon="pi pi-arrow-right" class="h-16" @click="routing(1)" />
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>

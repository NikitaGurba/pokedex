<script setup>
const route = useRoute();
const router = useRouter();
const store = useHeaderData();
let pokemons;
const pokemon = ref(null);
const id = ref(0);
const loaded = ref(false);
await useFetch("/data.json", {
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
        loaded.value = true;
        break;
      }
    }
  },
});
const routing = (direction) => {
  router.push({ path: pokemons[id.value + direction].name });
};

watch(id.value, () => {
  router.push({ path: pokemons[id.value].name });
});
</script>
<template>
  <div>
    <article
      class="xs:w-11/12 lg:w-full 2xl:w-5/6 m-auto mt-24 flex xs:flex-col lg:flex-row gap-4 justify-center"
    >
      <Button
        icon="pi pi-arrow-left"
        class="w-12 h-16 top-1/2 order-1 xs:hidden lg:block"
        @click="routing(-1)"
      />
      <Button
        icon="pi pi-arrow-right"
        class="w-12 h-16 top-1/2 order-4 xs:hidden lg:block"
        @click="routing(1)"
      />
      <div class="2xl:w-2/6 3xl:w-1/6 order-2">
        <Card :pt="{ content: 'lg:w-fit m-auto p-0 xs:w-8/12' }">
          <template #content>
            <Image v-if="loaded" :src="pokemon.imageUrl" alt="Image" preview />
            <div v-else class="w-56 h-56">
              <Skeleton width="100%" height="100%"></Skeleton>
            </div>
          </template>
        </Card>
        <div class="flex flex-col gap-4 w-full mt-4">
          <CardWithBadges
            title="Types"
            :array="pokemon ? pokemon.type : []"
            :loaded="loaded"
          />
          <CardWithBadges
            title="Weaknesses"
            :array="pokemon ? pokemon.weaknesses : []"
            :loaded="loaded"
          />
        </div>
        <Chars
          :loaded="loaded"
          :characteristics="pokemon ? pokemon.characteristics : []"
          class="w-full mt-4"
        />
      </div>
      <div class="xl:4/6 2xl:w-3/6 3xl:w-2/6 order-3">
        <Card
          class="w-full mb-4"
          :pt="{ content: 'text-lg p-0', title: 'p-0' }"
        >
          <template #title>
            <p v-if="loaded">Description</p>
            <Skeleton height="2.5rem" width="50%" v-else></Skeleton>
          </template>
          <template #content>
            <p v-if="loaded">
              {{ pokemon.description }}
            </p>
            <div v-else>
              <Skeleton class="mb-2"></Skeleton>
              <Skeleton class="mb-2"></Skeleton>
              <Skeleton width="70%"></Skeleton>
            </div>
          </template>
        </Card>
        <Card class="w-full" :pt="{ content: 'p-0' }">
          <template #content>
            <Bar :loaded="loaded" :stats="pokemon ? pokemon.stats : []" />
          </template>
        </Card>
      </div>
      <Paginator
        class="xs:block lg:hidden order-3 mb-16"
        v-model:first="id"
        :rows="1"
        :totalRecords="store.pokemonNames.length"
      >
      </Paginator>
    </article>
  </div>
</template>

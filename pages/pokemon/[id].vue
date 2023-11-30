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

const loaded = computed(() => pending)

</script>

<template>
  <div class="flex xs:flex-col lg:flex-row">
    <div
      class="xs:hidden lg:block xs:w-fit xs:mt-24 xs:h-fit 2xl:fixed left-0 xd:mt-0 xd:h-screen xd:pl-4 xd:pr-4 xs:pl-1 xs:pr-1 2xl:pr-8 2xl:pl-8 cursor-pointer hover:bg-gray-50 hover:bg-opacity-50 hover:dark:bg-opacity-5 hover:dark:bg-BSBlueDark"
      @click="routing(-1)"
    >
      <Button
        icon="pi pi-arrow-left"
        class="w-8 h-16 top-1/2"
        @click="routing(-1)"
      />
    </div>
    <article
      class="xs:w-11/12 lg:w-full 2xl:w-5/6 m-auto mt-24 flex xs:flex-col lg:flex-row gap-4 justify-center"
    >
      <div class="2xl:w-2/6 3xl:w-1/6">
        <Card :pt="{ content: 'w-fit m-auto' }">
          <template #content>
            <Image v-if="loaded" :src="pokemon.imageUrl" alt="Image" preview />
            <div v-else class="w-56 h-56">
              <Skeleton width="100%" height="100%"></Skeleton>
            </div>
          </template>
        </Card>
        <div class="flex flex-col gap-4 w-full mt-4">
          <CardWithBadges title="Types" :array="pokemon ? pokemon.type : []" :loaded="loaded" />
          <CardWithBadges title="Weaknesses" :array="pokemon ? pokemon.weaknesses : []" :loaded="loaded" />
        </div>
        <Chars :loaded="loaded" :characteristics="pokemon ? pokemon.characteristics : []" class="w-full mt-4" />
      </div>
      <div class="xl:4/6 2xl:w-3/6 3xl:w-2/6">
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
    </article>
    <div
      class="xs:flex lg:flex-row xs:w-8/12 xs:m-auto xs:mt-4 xs:mb-16 xs:justify-center lg:block lg:w-fit lg:m-0"
    >
      <div
        class="xs:block lg:hidden xs:w-fit xs:h-fit 2xl:fixed left-0 lg:mt-0 lg:h-screen lg:pl-4 lg:pr-4 xs:pl-1 xs:pr-1 2xl:pr-8 2xl:pl-8 cursor-pointer hover:bg-gray-50 hover:bg-opacity-50 hover:dark:bg-opacity-5 hover:dark:bg-BSBlueDark"
        @click="routing(-1)"
      >
        <Button
          icon="pi pi-arrow-left"
          class="xs:w-16 lg:w-8 h-16 top-1/2"
          @click="routing(-1)"
        />
      </div>
      <div
        class="xs:w-fit xs:h-fit 2xl:fixed right-0 lg:mt-0 lg:h-screen lg:pl-4 lg:pr-4 xs:pl-1 xs:pr-1 2xl:pr-8 2xl:pl-8 cursor-pointer hover:bg-gray-50 hover:bg-opacity-50 hover:dark:bg-opacity-5 hover:dark:bg-BSBlueDark"
        @click="routing(1)"
      >
        <Button
          icon="pi pi-arrow-right"
          class="xs:w-16 lg:w-8 h-16 top-1/2"
          @click="routing(1)"
        />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>

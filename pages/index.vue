<script setup lang="ts">
import { watch } from "vue";
const route = useRoute();

const typesStore = useTypesStore();
const pokemonListStore = usePokemonListStore();
if (route.query.search !== undefined) {
  if (typeof route.query.search === "string") {
    typesStore.selectedTypes = [route.query.search];
  } else {
    if(route.query.search !== null)
    {
      const array: string[] = []
      route.query.search.map((item) => {
        array.push(String(item))
      })
      typesStore.selectedTypes = array
    }
  }
}

const sortPokemons = (): void => {
  if (typesStore.selectedTypes.length !== 0) {
    pokemonListStore.pageList = [];
    for (let i = 0; i < pokemonListStore.list.length; i++) {
      let types: string[] = [];
      pokemonListStore.list[i].types.map((type: {type: {name: string}}) => {
        types.push(type.type.name);
      });
      if (typesStore.selectedTypes.every((i) => types.includes(i))) {
        pokemonListStore.pageList.push(pokemonListStore.list[i]);
      }
    }
  } else {
    pokemonListStore.pageList = pokemonListStore.list;
  }
};

const loadPokemons = async (): Promise<void> => {
  await pokemonListStore.loadNext();
  sortPokemons();
};
onMounted(async () => {
  if (pokemonListStore.pageList.length === 0) {
    await loadPokemons();
  }
  watch(typesStore, async () => {
    sortPokemons();
  });
});

watch(pokemonListStore, () => {
  let documentHeight = document.body.scrollHeight;
  let currentScroll = window.scrollY + window.innerHeight;
  let modifier = 200; 
  if(currentScroll + modifier > documentHeight) {
    window.scrollTo(0, document.body.scrollHeight);
  }
})
</script>
<template>
  <main
    class="w-11/12 pl-1/12 pr-1/12 m-auto xs:mt-44 xd:mt-24 gap-4 flex-wrap justify-center grid xs:grid-cols-1 xd:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7"
  >
    <PokemonItem
      v-for="(item, index) in pokemonListStore.pageList"
      :key="'pokemonitem' + item.name"
      :data="item"
    ></PokemonItem>
  </main>
  <!-- <div class="flex justify-center">
    <ProgressSpinner class="mt-8 w-16 h-16" strokeWidth="6" v-if="!loaded" />
  </div> -->
  <div class="flex justify-center mt-8 items-center gap-4 mb-24">
    <span>{{ pokemonListStore.pageList.length }} loaded</span>
    <Button @click="loadPokemons()" label="More"></Button>
  </div>
  <div class="fixed xs:top-40 xd:top-20 w-full h-1;">
    <div></div>
    <ProgressBar class="h-1" aria-label="Status" :value="pokemonListStore.currentLoad"><div></div></ProgressBar>
  </div>

</template>

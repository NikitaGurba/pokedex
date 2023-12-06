<script setup>
import { reactive, watch } from "vue";
import { getTypes } from "~/api/getTypes.mjs";
const route = useRoute();

const typesStore = useTypesStore();
const pokemonListStore = usePokemonListStore();
if (route.query.search !== undefined) {
  if (typeof route.query.search === "string") {
    typesStore.selectedTypes = [route.query.search];
  } else {
    typesStore.selectedTypes = route.query.search;
  }
}

const loaded = ref(true);

const sortPokemons = () => {
  if (typesStore.selectedTypes.length !== 0) {
    pokemonListStore.pageList = [];
    for (let i = 0; i < pokemonListStore.list.length; i++) {
      let types = [];
      pokemonListStore.list[i].types.map((type) => {
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

const loadPokemons = async () => {
  loaded.value = false;
  await pokemonListStore.loadNext();
  sortPokemons();
  loaded.value = true;
};
onMounted(async () => {
  if (pokemonListStore.pageList.length === 0) {
    await loadPokemons();
  }
  watch(typesStore, async () => {
    console.log("fas");
    sortPokemons();
  });
});
</script>
<template>
  <main
    class="w-fit pl-1/12 pr-1/12 m-auto mt-24 flex gap-4 flex-wrap justify-center"
  >
    <PokemonItem
      v-for="(item, index) in pokemonListStore.pageList"
      :key="'pokemonitem' + item.name"
      :data="item"
    ></PokemonItem>
  </main>
  <div class="flex justify-center">
    <ProgressSpinner class="mt-8 w-16 h-16" strokeWidth="6" v-if="!loaded" />
  </div>
  <div class="flex justify-center mt-8 items-center gap-4 mb-24">
    <span>{{ pokemonListStore.pageList.length }} loaded</span>
    <Button @click="loadPokemons(interval)" label="More"></Button>
  </div>
</template>

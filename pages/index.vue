<script setup>
import { computed, onMounted, reactive, watch } from "vue";
import { getTypes } from "~/api/getTypes.mjs";
const LOAD_NUM = 50;
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
const list = ref([]);
const loaded = ref(true);
const interval = reactive({
  offset: 0,
  limit: LOAD_NUM,
});
const loadPokemons = async (intervalReactive) => {
  let interval = {
    offset: intervalReactive.offset,
    limit: intervalReactive.limit,
  };
  loaded.value = false;
  const resp = await pokemonListStore.getList(interval);
  console.log(intervalReactive.offset);
  intervalReactive.offset += LOAD_NUM;
  for (let i = interval.offset; i < interval.offset + interval.limit; i++) {
    let types = [];
    resp[i].types.map((type) => {
      types.push(type.type.name);
    });
    if (typesStore.selectedTypes.length !== 0) {
      if (typesStore.selectedTypes.every((i) => types.includes(i))) {
        list.value.push(resp[i]);
      }
    } else {
      list.value.push(resp[i]);
    }
  }
  loaded.value = true;
};
onMounted(async () => {
  await loadPokemons(interval);
});
watch(typesStore, async () => {
  list.value = [];
  interval.offset = 0;
  await loadPokemons(interval);
});
</script>
<template>
  <main
    class="w-fit pl-1/12 pr-1/12 m-auto mt-24 flex gap-4 flex-wrap justify-center"
  >
    <PokemonItem
      v-for="(item, index) in list"
      :key="'pokemonitem' + index"
      :data="item"
    ></PokemonItem>
  </main>
  <div class="flex justify-center">
    <ProgressSpinner class="mt-8 w-16 h-16" strokeWidth="6" v-if="!loaded" />
  </div>
  <div class="flex justify-center mt-8 items-center gap-4 mb-24">
    <span>{{ list.length }} loaded</span>
    <Button @click="loadPokemons(interval)" label="More"></Button>
  </div>
</template>

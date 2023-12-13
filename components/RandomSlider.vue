<script setup>
const props = defineProps({
  loaded: Boolean,
});
const names = usePokemonNamesListStore();
const randomPokemons = useRandomPokemonsStore();
const namesRandom = [];
const randomLoaded = ref(false);
const amountOfRandomPokemonsDisplay = ref();
const randomNumber = (minimum, maximum) =>
  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
onBeforeMount(async () => {
  await names.getListNames();
  for (let i = 0; i < 10; i++) {
    namesRandom.push(names.listNames[randomNumber(0, names.listNames.length)]);
  }
  await randomPokemons.loadRandom(namesRandom);
  randomLoaded.value = true;
});

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
const processChange = debounce(() => onResizeFunc());
onMounted(() => {
  window.addEventListener("resize", processChange);
  onResizeFunc();
});

function onResizeFunc() {
  let width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  amountOfRandomPokemonsDisplay.value = width < 650 ? (width < 450 ? 1 : 2) : 3;
  console.log(amountOfRandomPokemonsDisplay.value);
}
</script>

<template>
  <div>
    <Carousel
      v-if="loaded && randomLoaded"
      :key="amountOfRandomPokemonsDisplay"
      :value="randomPokemons.list"
      :numVisible="amountOfRandomPokemonsDisplay"
      :numScroll="amountOfRandomPokemonsDisplay"
      circular
      :autoplayInterval="2000"
      :responsiveOptions="responsiveOptions"
      class="h-full w-full"
    >
      <template #item="slotProps">
        <div class="h-fit w-fit p-1">
          <PokemonItem
            :key="'pokemonitem' + slotProps.data.name"
            :data="slotProps.data"
          ></PokemonItem>
        </div>
      </template>
    </Carousel>
    <Skeleton v-else height="10rem"></Skeleton>
  </div>
</template>

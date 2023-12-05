<script setup>
import { getPokemon } from "@/api/getPokemon.mjs";
const props = defineProps({
  color: Object,
  themes: Array,
});
const router = useRouter();
const route = useRoute();
const pokemonStore = usePokemonStore();
const typesStore = useTypesStore();
typesStore.getTypes();
const selectedPokemon = ref();
const checked = ref();
onMounted(() => {
  checked.value = Boolean(props.themes.indexOf(props.color.value));
});
watch(checked, () => {
  props.color.preference = props.themes[Number(checked.value)];
});
const isSearching = ref(false);
const isFound = ref(false);
const currentIconInput = computed(() =>
  isSearching.value
    ? "pi-spin pi-spinner"
    : isFound.value
    ? "pi-check"
    : "pi-search"
);
const resp = ref();
const searchPokemon = async () => {
  if (selectedPokemon.value !== "") {
    isSearching.value = true;
    resp.value = await getPokemon(selectedPokemon.value);
    setTimeout(() => {
      if (resp.value.length !== 0) {
        isSearching.value = false;
        isFound.value = true;
      } else {
        isSearching.value = false;
        isFound.value = false;
      }
    }, 200);
  } else {
    isSearching.value = false;
    isFound.value = false;
  }
};

const onSubmit = (event) => {
  event.preventDefault();
  if (isFound.value) {
    isSearching.value = false;
    isFound.value = false;
    selectedPokemon.value = "";
    router.push({ path: '/pokemon/' + resp.value.name });
  }
};
if (route.name === 'index')
{
  watch(typesStore, () => {
  if (typesStore.selectedTypes.length !== 0) {
    let payload =
      "search=" + String(typesStore.selectedTypes).replaceAll(",", "&search=");
    window.history.replaceState({}, "", `?${payload}`);
  }
  else
  {
    window.history.replaceState({}, "", '/pokedex/');
  }
});
}
</script>
<template>
  <div>
    <Toolbar class="fixed w-full z-10 top-0 xs:h-20 xd:h-20 justify-center" :pt="{center: 'flex gap-4'}">
      <template #start> </template>

      <template #center>
        <div
          class="xs:mr-2 xd:mr-4 xs:flex xs:flex-col xd:block"
          v-if="route.name === 'pokemon-id'"
        >
          <span class="xs:mr-0 xd:mr-2 text-xl font-bold">{{
            pokemonStore.pokemon.name
          }}</span>
          <span class="text-zinc-500 text-xl dark:text-zinc-300 font-bold"
            >#{{ pokemonStore.pokemon.id }}</span
          >
        </div>
        <form
          class="p-input-icon-left"
          @submit="onSubmit"
        >
          <i :class="'pi ' + currentIconInput" />
          <InputText
            @input="searchPokemon"
            class="xs:w-32 xd:w-56"
            v-model="selectedPokemon"
            placeholder="Search"
            spellcheck="false"
          />
        </form>
        <div v-if="route.name === 'index'">
          <MultiSelect
            v-model="typesStore.selectedTypes"
            :options="typesStore.types"
            placeholder="Select types"
            display="chip"
            filter
            :maxSelectedLabels="3"
            :selectionLimit="3"
            class="w-full md:w-20rem "
          />
        </div>
        <InputSwitch v-model="checked"/>
      </template>
    </Toolbar>
  </div>
</template>
<style scoped>
@media only screen and (max-width: 600px) {
  .p-toolbar {
    padding: 0rem;
  }
}
</style>

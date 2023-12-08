<script setup>
const props = defineProps({
  color: Object,
  themes: Array,
});
const router = useRouter();
const route = useRoute();
const pokemonStore = usePokemonStore();
const typesStore = useTypesStore();
const names = usePokemonNamesListStore();
const selectedDropdown = ref();
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
const list = ref(null);
const dropElements = ref([]);
const searchPokemon = async () => {
  if (selectedPokemon.value.length < 3 && selectedPokemon.value.length > 0) {
    isSearching.value = true;
    dropElements.value = [];
  } else if (selectedPokemon.value !== "") {
    dropElements.value = names.listNames.filter((str) =>
      str.includes(selectedPokemon.value)
    );

    if (dropElements.value.length !== 0) {
      isSearching.value = false;
      isFound.value = true;
    } else {
      isSearching.value = false;
      isFound.value = false;
    }
  } else {
    isSearching.value = false;
    isFound.value = false;
    dropElements.value = [];
  }
};

if (route.name === "index") {
  watch(typesStore, () => {
    if (typesStore.selectedTypes.length !== 0) {
      let payload =
        "search=" +
        String(typesStore.selectedTypes).replaceAll(",", "&search=");
      window.history.replaceState({}, "", `?${payload}`);
    } else {
      window.history.replaceState({}, "", "/pokedex/");
    }
  });
}
onBeforeMount(async () => {
  await names.getListNames();
});
watch(selectedDropdown, () => {
  if (selectedDropdown.value !== "") {
    router.push({ path: "/pokemon/" + selectedDropdown.value });
    isSearching.value = false;
    isFound.value = false;
    dropElements.value = [];
    selectedDropdown.value = "";
    selectedPokemon.value = "";
  }
});

function debounce(func, timeout = 500) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
const processChange = debounce(() => searchPokemon());
</script>
<template>
  <div>
    <Toolbar
      class="fixed w-full z-10 top-0 xs:h-40   xd:h-20 p-0"
      :pt="{ center: 'flex gap-4 w-full justify-center xs:flex-col xd:flex-row' }"
    >
      <template #center>
        <router-link
          class="flex items-center"
          v-if="route.name === 'pokemon-id'"
          to="/"
        >
          <i class="pi pi-arrow-left" />
        </router-link>
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
        <form class="xs:w-11/12 xd:w-40">
          <div class="p-input-icon-left">
            <i :class="'pi ' + currentIconInput" />
            <InputText
              @keyup="processChange"
              class="w-full"
              v-model="selectedPokemon"
              placeholder="Search"
              spellcheck="false"
            />
          </div>
          <Listbox
            ref="list"
            v-if="dropElements.length !== 0"
            v-model="selectedDropdown"
            :options="dropElements"
            class="w-fit md:w-14rem absolute z-10"
            listStyle="max-height:250px"
          >
          </Listbox>
        </form>
        <div v-if="route.name === 'index'" class="xs:w-11/12 xd:w-fit  ">
          <MultiSelect
            v-model="typesStore.selectedTypes"
            :options="typesStore.types"
            placeholder="Select types"
            display="chip"
            filter
            :maxSelectedLabels="3"
            :selectionLimit="3"
            class="w-full md:w-20rem"
          />
        </div>
        <div class="w-16 xs:self-start xs:ml-4 xd:ml-0 xd:self-auto flex align-middle">
        <InputSwitch v-model="checked"/>
        </div>
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

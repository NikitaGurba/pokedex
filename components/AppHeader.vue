<script setup lang="ts">
const props = defineProps({
  color: {
    type: Object,
    default: {},
  },
  themes: {
    type: Array,
    default: [],
  },
});
const router = useRouter();
const route = useRoute();
const pokemonStore = usePokemonStore();
const typesStore = useTypesStore();
const names = usePokemonNamesListStore();
const selectedDropdown = ref();
const selectedPokemon = ref();
const checked = ref<boolean>(false);
const isSearching = ref<boolean>(false);
const isFound = ref<boolean>(false);
const dropElements = ref<string[]>([]);
const currentIconInput = computed<string>((): string =>
  isSearching.value
    ? "pi-spin pi-spinner"
    : isFound.value
    ? "pi-check"
    : "pi-search"
);

const searchPokemon = async (): Promise<any> => {
  if (selectedPokemon.value.length < 3 && selectedPokemon.value.length > 0) {
    isSearching.value = true;
    dropElements.value = [];
  } else if (selectedPokemon.value !== "") {
    dropElements.value = names.listNames.filter((str: string) =>
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

typesStore.getTypes();
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
onMounted((): void => {
  checked.value = Boolean(props.themes.indexOf(props.color.value));
});
watch(checked, (): void => {
  props.color.preference = props.themes[Number(checked.value)];
});

function debounce(func: any, timeout: number = 500): any {
  let timer: number;
  return () => {
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      func.call();
    }, timeout);
  };
}
const flexLayout = computed<string>(() => {
  return route.name === "pokemon-id"
    ? "xs:flex-row"
    : "xs:flex-col xd:flex-row";
});

const switchLayout = computed<string>(() => {
  return route.name !== "pokemon-id"
    ? "xs:self-start xs:ml-4 xd:ml-0 xd:self-auto"
    : "";
});

const toolBarLayout = computed<string>(() => {
  return route.name !== "pokemon-id" ? "xs:h-40 xd:h-20" : "h-20";
});

const processChange = debounce(searchPokemon);
</script>
<template>
  <div>
    <Toolbar
      :class="`fixed w-full z-10 top-0 p-0 ${toolBarLayout}`"
      :pt="{
        center: `flex ${flexLayout} gap-4 w-full justify-center`,
      }"
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
          <div class="p-input-icon-left w-full">
            <i :class="'pi ' + currentIconInput" />
            <InputText
              @keyup="processChange()"
              class="w-full"
              v-model="selectedPokemon"
              placeholder="Search"
              spellcheck="false"
            />
          </div>
          <Listbox
            v-if="dropElements.length !== 0"
            v-model="selectedDropdown"
            :options="dropElements"
            class="w-fit md:w-14rem absolute z-10"
            listStyle="max-height:250px"
          >
          </Listbox>
        </form>
        <div v-if="route.name === 'index'" class="xs:w-11/12 xd:w-fit">
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
        <div :class="`w-16 ${switchLayout} flex align-middle`">
          <InputSwitch v-model="checked" />
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

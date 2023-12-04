<script setup>
const props = defineProps({
  color: Object,
  themes: Array,
});
const pokemonStore = usePokemonStore();
const checked = ref()
onMounted(() => {
  checked.value = Boolean(props.themes.indexOf(props.color.value))
})
watch(checked, () => {
  props.color.preference = props.themes[Number(checked.value)]
})
</script>
<template>
  <div>
    <Toolbar class="fixed w-full z-10 top-0 xs:h-20 xd:h-20 justify-center">
      <template #start> </template>

      <template #center>
        <div class="xs:mr-2 xd:mr-4 xs:flex xs:flex-col xd:block">
          <span class="xs:mr-0 xd:mr-2">{{ pokemonStore.pokemon.name }}</span>
          <span class="text-zinc-500 dark:text-zinc-300 font-bold"
            >#{{ pokemonStore.pokemon.id }}</span
          >
        </div>
        <!-- <Dropdown
          v-model="selectedPokemon"
          :options="store.pokemonNames"
          filter
          placeholder="Search"
          class="xs:w-32 xd:w-56"
          @change="
            router.push({ path: selectedPokemon });
            selectedPokemon = '';
          "
        /> -->
        <InputSwitch v-model="checked" class="xs:ml-2 xd:ml-4"/>
      </template>
    </Toolbar>
  </div>
</template>
<style scoped>
@media only screen and (max-width: 600px) {
  .p-toolbar 
  {
    padding: 0rem;
  }
}

</style>
<script setup>
const props = defineProps({
  color: Object,
  changeTheme: Function,
  themes: Array,
});
const selectedPokemon = ref();
const store = useHeaderData();
const router = useRouter();
</script>
<template>
  <Toolbar class="fixed w-full z-10 top-0">
    <template #start> </template>

    <template #center>
      <div class="mr-5">
        <span class="mr-2">{{ store.title }}</span>
        <span class="text-zinc-500 dark:text-zinc-300 font-bold"
          >#{{ store.id }}</span
        >
      </div>
      <Dropdown
        v-model="selectedPokemon"
        :options="store.pokemonNames"
        filter
        placeholder="Search"
        class="w-56"
        @change="router.push({ path: selectedPokemon }); selectedPokemon = ''"
      />
    </template>

    <template #end>
      <Dropdown
        v-model="color.preference"
        @change="changeTheme"
        :options="themes"
        :placeholder="color.value"
        class="mr-2"
      />
    </template>
  </Toolbar>
</template>

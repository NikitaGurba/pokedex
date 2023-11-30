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
  <div>
    <Toolbar class="fixed w-full z-10 top-0 xs:h-32 xd:h-20">
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
          class="xs:w-32 xd:w-56"
          @change="
            router.push({ path: selectedPokemon });
            selectedPokemon = '';
          "
        />
      </template>

      <template #end>
        <Dropdown
          v-model="color.preference"
          @change="changeTheme"
          :options="themes"
          placeholder="theme"
          class="w-24"
        />
      </template>
    </Toolbar>
  </div>
</template>

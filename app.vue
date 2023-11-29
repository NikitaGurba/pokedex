<script setup>
import { usePrimeVue } from "primevue/config";
const themes = ["dark", "light"];
const color = useColorMode();
const PrimeVue = usePrimeVue();
const loaded = ref(false)
const changeTheme = (auto) => {
  let nextMode
  if (auto === true)
  {
    nextMode = localStorage.getItem("theme")
  }
  else
  {
    nextMode = color.preference === "system" ? color.value : color.preference;
    localStorage.setItem("theme", nextMode)
  }
  console.log(color.value, color.preference, localStorage.getItem("nuxt-color-mode"))
  PrimeVue.changeTheme(
    `bootstrap4-${themes[Math.abs(themes.indexOf(nextMode) - 1)]}-blue`,
    `bootstrap4-${nextMode}-blue`,
    "theme-link",
    () => {
      loaded.value = true;
    }
  );
};
onMounted(() => changeTheme(true))
</script>
<template>
  <div v-if="loaded">
    <NuxtLayout :color="color" :changeTheme="changeTheme" :themes="themes">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style lang="scss">
@use "~/assets/scss/main.scss";
</style>
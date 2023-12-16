<script setup lang="ts">
const themes:string[] = ["light", "dark"];
const color = useColorMode();
</script>
<template>
  <div>
    <NuxtLayout :color="color" :themes="themes">
      <NuxtPage  />
    </NuxtLayout>
  </div>
</template>
<style lang="scss">
@use "~/assets/scss/main.scss";
:root {
  --color: #243746;
  --color-primary: #158876;
  --color-secondary: #0e2233;
  --bg: #f3f5f4;
  --bg-secondary: #fff;
  --border-color: #ddd;
}

.dark-mode {
  --color: #ebf4f1;
  --color-primary: #41b38a;
  --color-secondary: #fdf9f3;
  --bg: #091a28;
  --bg-secondary: #071521;
  --border-color: #0d2538;
}
</style>
<script setup>
  const props = defineProps({
    color: Object,
    changeTheme: Function,
    themes: Array
  })
</script>
<template>
  <div>
    <AppHeader :color="color" :changeTheme="changeTheme" :themes="themes"/>
    <slot />
    <AppFooter />
  </div>
</template>

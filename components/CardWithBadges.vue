<script setup>
    const props = defineProps({
        title: String,
        array: Array
    })
</script>

<template>
  <Card class="w-full" :pt="{title: 'whitespace-normal break-words ', content: 'p-0 flex gap-2 w-full flex-wrap'}">
    <template #title>{{ title }}</template>
    <template #content>
      <Chip v-for="item in array" :label="item" :key="item + title" />
    </template>
  </Card>
</template>
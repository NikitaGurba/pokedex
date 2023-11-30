<script setup>
import { TYPE_COLORS } from "@/constants"
const props = defineProps({
  title: String,
  array: Array,
  loaded: Boolean,
});
const color = (name) => {
  console.log(name)
  return TYPE_COLORS[name]
}
</script>

<template>
  <Card
    v-if="loaded"
    class="w-full"
    :pt="{
      title: 'whitespace-normal break-words ',
      content: 'p-0 flex gap-2 w-full flex-wrap',
    }"
  >
    <template #title>{{ title }}</template>
    <template #content>
      <Chip v-for="item in array" :style="{background: `var(${color(item)})`}" :label="item" :key="item + title" />
    </template>
  </Card>
  <Card
    v-else
    class="w-full"
    :pt="{
      title: 'whitespace-normal break-words ',
      content: 'p-0 flex gap-2 w-full flex-wrap justify-center',
    }"
  >
    <template #title><Skeleton height="2.5rem"></Skeleton></template>
    <template #content>
        <Skeleton width="30%" height="2rem"></Skeleton>
        <Skeleton width="30%" height="2rem"></Skeleton>
        <Skeleton width="30%" height="2rem"></Skeleton>
    </template>
  </Card>
</template>

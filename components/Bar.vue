<script setup>
const props = defineProps({
  stats: Object,
})

// сделать анимацию
let keys = [],
  values = [];
props.stats.map((item) => {
  keys.push(Object.keys(item));
  values.push(Object.values(item));
});
const MAX_COL = 16
</script>

<template>
  <div class="w-full flex flex-row justify-evenly">
    <li class="list-none flex flex-col gap-1">
      <ul v-for="i in MAX_COL" :key="i + 'num'">
        <div class="h-4 text-center">{{ MAX_COL + 1 - i }}</div>
      </ul>
    </li>
    <li class="list-none w-1/12 flex flex-col gap-1" v-for="(key, index) in keys" :key="key">
      <ul class="" v-for="i in MAX_COL" :key="i + 'column'">
        <div class="bg-gray-50 dark:bg-gray-50 dark:opacity-5 h-4 rounded-2xl" v-if="values[index][0] <= MAX_COL - i"></div>
        <div class="bg-BSBlueLight dark:bg-BSBlueDark h-4 rounded-2xl" v-else></div>
      </ul>
      <div class="text-center">
        {{ key[0] }}
      </div>
    </li>
  </div>
</template>

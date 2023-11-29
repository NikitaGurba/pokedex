<script setup>
const test = [
  { hp: "3" },
  { attack: "3" },
  { defense: "3" },
  { "special attack": "4" },
  { "special defense": "4" },
  { speed: "3" },
];
let keys = [],
  values = [];
test.map((item) => {
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
        <div class="bg-gray dark:bg-gray h-4" v-if="values[index][0] <= MAX_COL - i"></div>
        <div class="bg-BSBlueLight dark:bg-BSBlueDark h-4" v-else></div>
      </ul>
      <div class="text-center">
        {{ key[0] }}
      </div>
    </li>
  </div>
</template>

<script setup>
const props = defineProps({
  stats: Object,
  loaded: Boolean,
});

const state = computed(() => {
  let keys = [], values = []
  props.stats.map((item) => {
    keys.push(Object.keys(item));
    values.push(Object.values(item));
  });
  return [keys, values]
});


const MAX_COL = 16;
</script>

<template>
  <div
    v-if="loaded"
    class="xs:w-10/12 xd:w-96 m-auto flex flex-row justify-evenly"
  >
    <li class="list-none flex flex-col gap-1">
      <ul v-for="i in MAX_COL" :key="i + 'num'">
        <div class="h-4 text-center">{{ MAX_COL + 1 - i }}</div>
      </ul>
    </li>
    <li
      class="list-none w-12 flex flex-col gap-1"
      v-for="(key, index) in state[0]"
      :key="key"
    >
      <ul class="" v-for="i in MAX_COL" :key="i + 'column'">
        <div
          class="bg-gray-50 dark:bg-gray-50 dark:opacity-5 h-4 rounded-2xl"
          v-if="state[1][index][0] <= MAX_COL - i"
        ></div>
        <div
          class="bg-BSBlueLight dark:bg-BSBlueDark h-4 rounded-2xl"
          v-else
        ></div>
      </ul>
      <span class="text-center text-xs">
        {{ key[0] }}
      </span>
    </li>
  </div>
  <div v-else class="xs:w-10/12 h-80 xd:w-96 m-auto flex flex-row justify-evenly">
    <Skeleton height="100%"></Skeleton>
  </div>
</template>

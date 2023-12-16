<script setup lang="ts">
import { MAX_COL } from "@/constants";
const props = defineProps({
  stats: { type: Object, default: {} },
  loaded: { type: Boolean, default: false },
});
const state = computed<Array<any>>(() => {
  let keys: string[] = [],
    values: number[] = [];
  props.stats.map((item: stat) => {
    keys.push(String(Object.keys(item)));
    values.push(Number(Object.values(item)));
  });
  return [keys, values];
});
const column = ref<HTMLElement>();
function animate() {
  if (column.value !== undefined) {
    const array: Element[] = Array.from(
      column.value.getElementsByClassName("animate")
    ).reverse();
    array.map((item: Element, index: number) => {
      setTimeout(
        () =>
          (item.className =
            "xs:w-[2rem] m-auto xd:w-12 bg-BSBlueLight dark:bg-BSBlueDark h-4 rounded-2xl transition ease-in-out delay-150 "),
        50 + index * 80
      );
    });
  }
}
onMounted(() => {
  if (props.loaded) {
    animate();
  }
});
onUpdated(() => {
  animate();
});
</script>

<template>
  <div
    ref="column"
    v-if="loaded"
    class="xs:w-full xd:w-96 m-auto flex flex-row justify-around"
  >
    <li class="list-none flex flex-col gap-1">
      <ul v-for="i in MAX_COL" :key="i + 'num'">
        <div class="h-4 text-center xs:text-xs xd:text-base">
          {{ MAX_COL + 1 - i }}
        </div>
      </ul>
    </li>
    <li
      class="list-none xs:min-w-0 xs:w-[3rem] xd:w-12 flex flex-col gap-1"
      v-for="(key, index) in state[0]"
      :key="key"
    >
      <ul v-for="i in MAX_COL" :key="i + 'column'">
        <div
          class="xs:w-[2rem] xd:w-12 m-auto bg-gray-50 dark:bg-gray-50 dark:opacity-5 h-4 rounded-2xl"
          v-if="state[1][index][0] <= MAX_COL - i"
        ></div>
        <div
          v-else
          class="xs:w-[2rem] xd:w-12 m-auto bg-gray-50 dark:bg-gray-50 dark:opacity-5 h-4 rounded-2xl animate"
        ></div>
      </ul>
      <span class="text-xs text-center break-words">
        {{ key[0] }}
      </span>
    </li>
  </div>
  <div
    v-else
    class="xs:w-10/12 h-80 xd:w-96 m-auto flex flex-row justify-evenly"
  >
    <Skeleton height="100%"></Skeleton>
  </div>
</template>

<script setup lang="ts">
import { TYPE_COLORS } from "@/constants";
const router = useRouter();
const props = defineProps({
  data: {type: Object, default: {}}
});
const types: string[] = [];
props.data.types.map((item: {type: {name: string}}) => {
  types.push(item.type.name);
});
const color = (name: string) => {
  return TYPE_COLORS[name];
};
const linkToPokemon = (): void => {
  router.push({ path: "/pokemon/" + props.data.name });
};
</script>
<template>
  <router-link class="h-full w-full cursor-pointer" :to="'/pokemon/' + props.data.name">
    <Card
      :pt="{ content: 'p-0' }"
      @click="linkToPokemon"
    >
      <template #content>
        <Image
          :src="data.sprites.other['official-artwork'].front_default"
        ></Image>
        <div class="font-bold">{{ data.name }}</div>
        <div class="flex flex-row gap-1 flex-wrap">
          <Chip
            v-for="item in types"
            :style="{ background: `var(${color(item)})` }"
            :label="item"
            :key="item"
          />
        </div>
      </template>
    </Card>
  </router-link>
</template>

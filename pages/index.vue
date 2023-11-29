<script setup>
const pokemon = ref(null);
const { pending } = await useFetch("/data.json", {
  server: false,
  onResponse({ request, response, options }) {
    pokemon.value = response._data.pokemons[0];
  },
});
const color = (name) => {
  if (name === "fire") return "blue";
};
</script>

<template>
  <article
    v-if="!pending"
    class="w-5/6 m-auto mt-24 flex flex-row gap-4 justify-center"
  >
    <div class="w-1/6">
      <Card>
        <template #content>
          <Image :src="pokemon.imageUrl" alt="Image" preview />
        </template>
      </Card>
      <div class="flex flex-col gap-4 w-full mt-4">
        <Card
          class="w-full"
          :pt="{
            content: 'p-0 flex gap-2 w-full flex-wrap',
            title: 'leading-7',
          }"
        >
          <template #title>Types</template>
          <template #content>
            <Chip
              v-for="type in pokemon.type"
              :label="type"
              :key="type + 'type'"
            />
          </template>
        </Card>
        <Card
          class="w-full"
          :pt="{
            content: 'p-0 flex gap-2 w-full flex-wrap',
            title: 'leading-7',
          }"
        >
          <template #title>Weaknesses</template>
          <template #content>
            <Chip
              v-for="weakness in pokemon.weaknesses"
              :label="weakness"
              :key="weakness + 'weakness'"
            />
          </template>
        </Card>
      </div>
      <Chars class="w-full mt-4"/>
    </div>
    <div class="w-2/6">
      <Card class="w-fit mb-4" :pt="{ content: 'text-lg p-0', title: 'p-0' }">
        <template #title>
          <p>Description</p>
        </template>
        <template #content>
          <p>
            {{ pokemon.description }}
          </p>
        </template>
      </Card>
      <Card class="w-full" :pt="{content: 'p-0'}">
        <template #content>
          <Bar />
        </template>
      </Card>
    </div>
  </article>
</template>

<style lang="postcss" scoped></style>

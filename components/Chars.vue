<script setup>
const test = {
  height: "0.7",
  weight: "6.9",
  gender: ["m", "f"],
  category: "Seed",
  abilities: {
    name: "Overgrow",
    description: "Powers up Grass-type moves when the Pokémon’s HP is low.",
  },
};
</script>

<template>
  <Card class="w-fit" :pt="{content: 'p-0 flex flex-row gap-4 flex-wrap'}">
    <template #content>
      <div>
        <b>Height</b>
        <p>{{ test.height }} m</p>
      </div>
      <div>
        <b>Weight</b>
        <p>{{ test.weight }} kg</p>
      </div>
      <div>
        <b>Gender</b>
        <p><span v-for="gender in test.gender" :key="gender">{{ gender }}</span></p>
      </div>
      <div>
        <b>Category</b>
        <p>{{ test.category }}</p>
      </div>
      <div>
        <b>Abilities</b>
        <p>{{ test.abilities.name }}</p>
      </div>
    </template>
  </Card>
</template>

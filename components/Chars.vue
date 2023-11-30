<script setup>
const props = defineProps({
  characteristics: Object,
  loaded: Boolean,
});
</script>

<template>
  <Card
    v-if="loaded"
    class="w-fit"
    :pt="{ content: 'p-0 flex flex-row gap-4 flex-wrap' }"
  >
    <template #content>
      <div>
        <b>Height</b>
        <p>{{ characteristics.height }} m</p>
      </div>
      <div>
        <b>Weight</b>
        <p>{{ characteristics.weight }} kg</p>
      </div>
      <div>
        <b>Gender</b>
        <p>
          <span v-for="gender in characteristics.gender" :key="gender">{{
            gender
          }}</span>
        </p>
      </div>
      <div>
        <b>Category</b>
        <p>{{ characteristics.category }}</p>
      </div>
      <div>
        <b>Abilities</b>
        <p>{{ characteristics.abilities.name }}</p>
      </div>
    </template>
  </Card>
  <Card
    v-else
    class="w-fit"
    :pt="{ content: 'p-0 flex flex-row gap-4 flex-wrap' }"
  >
    <template #content>
      <Skeleton height="1rem"></Skeleton>
    </template>
  </Card>
</template>

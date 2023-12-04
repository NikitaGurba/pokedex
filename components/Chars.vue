<script setup>
const props = defineProps({
  characteristics: Object,
  loaded: Boolean,
});
const visibleDialog = ref(false);
</script>

<template>
  <div>
    <Dialog
    v-if="loaded"
      v-model:visible="visibleDialog"
      modal
      :header="characteristics.abilities.name"
      :style="{ width: '50rem' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    >
      <p>
        {{ characteristics.abilities.description }}
      </p>
    </Dialog>
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
        <!-- <div>
          <b>Category</b>
          <p>{{ characteristics.category }}</p>
        </div> -->
        <div
          @click="visibleDialog = true"
          class="cursor-pointer text-blue-500 dark:text-blue-300"
        >
          <b>Abilities</b>
          <p>{{ characteristics.abilities.name }}</p>
        </div>
      </template>
    </Card>
    <Card
      v-else
      class="w-full"
      :pt="{ content: 'p-0 flex flex-row gap-4 flex-wrap' }"
    >
      <template #content>
        <Skeleton height="2rem" ></Skeleton>
        <Skeleton height="2rem" ></Skeleton>
      </template>
    </Card>
  </div>
</template>

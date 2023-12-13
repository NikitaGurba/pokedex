<script setup>
const route = useRoute();
const router = useRouter();
const pokemonStore = usePokemonStore();
const pokemon = ref(null);
const loaded = ref(false);
const id = ref(null);
definePageMeta({
  pageTransition: {
    name: "slide-right",
    mode: "out-in",
  },
  middleware(to, from) {
    to.meta.pageTransition.name =
      +to.params.id > +from.params.id ? "slide-left" : "slide-right";
  },
});

onBeforeMount(async () => {
  await pokemonStore.getPokemonData(route.params.id.toLowerCase());
  pokemon.value = pokemonStore.pokemon;
  id.value = pokemon.value.id - 1;
  loaded.value = true;
  watch(id, () => {
    router.push({ path: String(id.value + 1) });
  });
});

const routing = async (direction) => {
  
  if (id.value === null) {
    id.value = Number(route.params.id);
    if (id.value + direction <= 0) {
      direction = 0;
    }
    router.push({ path: String(id.value + direction + 1) });
  }
  else
  {
    if (id.value + direction + 1 !== 0)
    {
      router.push({ path: String(id.value + direction + 1) });
    }
  }
};
</script>
<template>
  <div>
    <article
      class="xs:w-11/12 lg:w-full 2xl:w-5/6 m-auto mb-24 mt-24 flex xs:flex-col lg:flex-row gap-4 justify-center"
    >
      <Button
        icon="pi pi-arrow-left"
        class="w-12 h-16 top-1/2 order-1 xs:hidden lg:block"
        @click="routing(-1)"
      />
      <Button
        icon="pi pi-arrow-right"
        class="w-12 h-16 top-1/2 order-4 xs:hidden lg:block"
        @click="routing(1)"
      />
      <div class="2xl:w-2/6 3xl:w-1/6 order-2">
        <Card :pt="{ content: 'lg:w-fit m-auto p-0 xs:w-8/12' }">
          <template #content>
            <Image
              class="lg:w-56 lg:h-56"
              v-if="loaded"
              :src="pokemon.imageUrl"
              alt="Image"
              preview
            />
            <div v-else class="w-56 h-56">
              <Skeleton width="100%" height="100%"></Skeleton>
            </div>
          </template>
        </Card>
        <div class="flex flex-col gap-4 w-full mt-4">
          <CardWithBadges
            title="Types"
            :array="pokemon ? pokemon.types : []"
            :loaded="loaded"
          />
          <CardWithBadges
            title="Weaknesses"
            :array="pokemon ? pokemon.weaknesses : []"
            :loaded="loaded"
          />
        </div>
        <Chars
          :loaded="loaded"
          :characteristics="pokemon ? pokemon.characteristics : []"
          class="w-full mt-4"
        />
      </div>
      <div class="xs:w-full lg:w-7/12 xl:w-3/6 2xl:w-3/6 3xl:w-5/12 order-3">
        <Card
          class="w-full mb-4"
          :pt="{ content: 'text-lg p-0', title: 'p-0' }"
        >
          <template #title>
            <p v-if="loaded">Description</p>
            <Skeleton height="2.5rem" width="50%" v-else></Skeleton>
          </template>
          <template #content>
            <p v-if="loaded">
              {{ pokemon.description }}
            </p>
            <div v-else>
              <Skeleton class="mb-2"></Skeleton>
              <Skeleton class="mb-2"></Skeleton>
              <Skeleton width="70%"></Skeleton>
            </div>
          </template>
        </Card>
        <Card class="w-full mb-4" :pt="{ content: 'p-0' }">
          <template #content>
            <Bar :loaded="loaded" :stats="pokemon ? pokemon.stats : []" />
          </template>
        </Card>
        <Card class="w-full p-0" :pt="{ content: 'p-0' }">
          <template #content>
            <RandomSlider :loaded="loaded"></RandomSlider>
          </template>
        </Card>
      </div>
      <Paginator
        class="xs:block w-full lg:hidden order-3 mb-16"
        v-model:first="id"
        :rows="1"
        :totalRecords="id + 11"
        template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      >
      </Paginator>
    </article>
  </div>
</template>
<style>
body {
  overflow-x: hidden;
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style>

<script setup>
const props = defineProps({
  color: Object,
  changeTheme: Function,
  themes: Array,
});
</script>
<template>
  <Toolbar class="fixed w-full z-10 top-0">
    <template #start>
      <Button icon="pi pi-arrow-left" class="" />
    </template>

    <template #center>
      <div class="mr-5">
        <span class="mr-2">dasdsa</span>
        <span class="text-zinc-500 dark:text-zinc-300 font-bold">#0001</span>
      </div>
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText placeholder="Search" />
      </span>
    </template>

    <template #end>
      <Dropdown
        v-model="color.preference"
        @change="changeTheme"
        :options="themes"
        :placeholder="color.value"
        class="mr-2"
      />
      <Button icon="pi pi-arrow-right" />
    </template>
  </Toolbar>
</template>

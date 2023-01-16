<script setup lang="ts">
import { ref } from 'vue';
import AsyncPage from './AsyncPageAsync.vue';
const isError = ref(false);
</script>

<template>
  <div v-if="isError">Load error</div>
  <Suspense v-else>
    <AsyncPage />

    <template #fallback> Loading... </template>
  </Suspense>
</template>

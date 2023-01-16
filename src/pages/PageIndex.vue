<script setup lang="ts">
import { usePageMeta } from 'src/lib/page_meta';

usePageMeta();
</script>

<template>
  <q-page class="row items-center justify-evenly">
    <router-link to="/login">Login</router-link>
  </q-page>
</template>

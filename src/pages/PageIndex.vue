<script setup lang="ts">
import { usePageMeta } from 'src/lib/common';

usePageMeta();
</script>

<template>
  <q-page class="row items-center justify-evenly">
    <router-link to="/one">Page One</router-link>
    <router-link to="/two">Page Two</router-link>
  </q-page>
</template>

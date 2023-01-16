<script setup lang="ts">
import { usePageMeta } from 'src/lib/page_meta';
import LoginForm from 'src/components/forms/LoginForm.vue';

usePageMeta({
  title: 'Login page',
});
</script>

<template>
  <q-page class="row items-center justify-evenly">
    <LoginForm />
  </q-page>
</template>

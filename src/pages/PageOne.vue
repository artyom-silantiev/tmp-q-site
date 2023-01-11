<script setup lang="ts">
import HelloComponent from '../components/HelloComponent.vue';
import { usePageMeta } from 'src/lib/common';

usePageMeta({
  title: 'Page One',
});
</script>

<template>
  <q-page class="row items-center justify-evenly">
    <div>Is Page One!</div>
    <div>
      <HelloComponent name="User" />
    </div>
  </q-page>
</template>

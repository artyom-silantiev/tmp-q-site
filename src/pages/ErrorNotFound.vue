<script setup lang="ts">
import { usePageMeta } from 'src/lib/page_meta';

usePageMeta({
  title: 'Page not found',
  meta: {
    description: {
      name: 'description',
      content: 'This page not exists.',
    },
  },
});
</script>

<template>
  <div
    class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h2" style="opacity: 0.4">Oops. Nothing here...</div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

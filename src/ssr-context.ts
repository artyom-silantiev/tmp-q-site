import { useSSRContext } from 'vue';

export const ssrContext = process.env.SERVER ? useSSRContext() : null

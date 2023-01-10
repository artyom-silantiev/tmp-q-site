import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{
      path: '', component: () => import('pages/PageIndex.vue'),
    }, {
      path: 'one', component: () => import('pages/PageOne.vue'),
    }, {
      path: 'two', component: () => import('pages/PageTwo.vue'),
    }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;

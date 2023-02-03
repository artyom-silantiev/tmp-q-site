import { RouteRecordRaw } from 'vue-router';
import { AuthGuard, NotAuthGuard } from './guards';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/PageIndex.vue'),
      },
      {
        path: 'login',
        component: () => import('pages/guest/LoginPage.vue'),
        meta: {
          guards: [NotAuthGuard()],
        },
      },
    ],
  },
  {
    path: '/user',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'profile',
        component: () => import('pages/user/ProfilePage.vue'),
      },
    ],
    meta: {
      guards: [AuthGuard()],
    },
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;

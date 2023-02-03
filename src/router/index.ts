import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteLocationNormalized,
  Router,
} from 'vue-router';

import routes from './routes';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory;

  const router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  router.beforeEach((to, from) => {
    const guards = getGuards(to);

    for (const guard of guards) {
      guard(router);
    }
  });

  return router;
});

function getGuards(to: RouteLocationNormalized) {
  const guards = [] as ((router: Router) => void)[];

  for (const route of to.matched) {
    if (route.meta && route.meta.guards) {
      const routeGuards = route.meta.guards as [];
      routeGuards.forEach((rg) => guards.push(rg));
    }
  }

  return guards;
}

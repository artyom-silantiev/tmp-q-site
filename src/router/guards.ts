import { useAuthStore } from 'src/stores/auth';
import { Router } from 'vue-router';

export function AuthGuard() {
  return (router: Router) => {
    const authStore = useAuthStore();

    if (!authStore.isAuth()) {
      router.replace('/login');
    }
  };
}

export function NotAuthGuard() {
  return (router: Router) => {
    const authStore = useAuthStore();

    if (authStore.isAuth()) {
      router.replace('/');
    }
  };
}

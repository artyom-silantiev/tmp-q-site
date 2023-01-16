import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { localStorageService } from 'src/lib/local_storage';
import { User, UserRole } from 'src/models/user';
import { computed } from 'vue';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: '',
    user: null as null | User,
    userRole: UserRole.GUEST as UserRole,
  }),
  getters: {},
  actions: {
    async init() {
      const accessToken = localStorageService.getItem<string>('accessToken');
      if (accessToken) {
        this.checkToken(accessToken);
      }
    },
    async checkToken(accessToken: string) {
      try {
        const res = await api.get<{ user: User }>('/user/profile', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });

        const user = res.data.user;
        localStorageService.setItem('accessToken', accessToken);
        this.accessToken = accessToken;
        this.user = user;
        this.userRole = user.role;
      } catch (error) { }
    },
    async setToken(accessToken: string) {
      await this.checkToken(accessToken);
    },
    getToken() {
      if (this.accessToken) {
        return this.accessToken;
      } else {
        return null;
      }
    },
    async logout() {
      if (this.isAuth()) {
        try {
          await api.post('/user/logout');
        } catch (error) { }
        localStorageService.removeItem('accessToken');
        this.accessToken = '';
        this.user = null;
        this.userRole = UserRole.GUEST;
      }
    },
    isAuth() {
      return !!(this.accessToken && this.user);
    },
    toRefs() {
      return {
        isAuth: computed(() => this.isAuth()),
        accessToken: computed(() => this.accessToken),
        user: computed(() => this.user),
        userRole: computed(() => this.userRole),
      }
    }
  },
});

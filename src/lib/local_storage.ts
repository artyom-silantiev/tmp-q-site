import { cyrb53 } from './helpers';

class LocalStorageService {
  constructor(private keyPrefix: string) { }

  private getKey(key: string) {
    return `${this.keyPrefix}:${cyrb53(key)}`;
  }

  setItem(key: string, data: any) {
    const lsKey = this.getKey(key);
    const encryptedData = btoa(JSON.stringify(data));
    localStorage.setItem(lsKey, encryptedData);
  }

  getItem<T>(key: string): T | null {
    const lsKey = this.getKey(key);
    const encryptedData = localStorage.getItem(lsKey);

    if (!encryptedData) {
      return null;
    }

    const decryptedData = atob(encryptedData);
    const data = JSON.parse(decryptedData);
    return data as T;
  }

  removeItem(key: string) {
    const lsKey = this.getKey(key);
    localStorage.removeItem(lsKey);
  }
}

export const localStorageService = new LocalStorageService('app');

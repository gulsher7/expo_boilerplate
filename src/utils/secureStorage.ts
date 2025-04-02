import * as SecureStore from 'expo-secure-store';

// Storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER_DATA: 'user_data',
  IS_FIRST_TIME: 'is_first_time',
  LANGUAGE: 'language',
  THEME: 'theme',
} as const;

// Type for storage keys to enable autocomplete
export type StorageKeyType = keyof typeof STORAGE_KEYS;

export const secureStorage = {
  async setItem(key: StorageKeyType, value: string) {
    try {
      await SecureStore.setItemAsync(STORAGE_KEYS[key], value);
    } catch (error) {
      console.error('Error storing value:', error);
    }
  },

  async getItem(key: StorageKeyType) {
    try {
      return await SecureStore.getItemAsync(STORAGE_KEYS[key]);
    } catch (error) {
      console.error('Error retrieving value:', error);
      return null;
    }
  },

  async removeItem(key: StorageKeyType) {
    try {
      await SecureStore.deleteItemAsync(STORAGE_KEYS[key]);
    } catch (error) {
      console.error('Error removing value:', error);
    }
  },

  // Helper for storing objects
  async setObject(key: StorageKeyType, value: object) {
    try {
      const jsonValue = JSON.stringify(value);
      await SecureStore.setItemAsync(STORAGE_KEYS[key], jsonValue);
    } catch (error) {
      console.error('Error storing object:', error);
    }
  },

  // Helper for retrieving objects
  async getObject<T>(key: StorageKeyType): Promise<T | null> {
    try {
      const jsonValue = await SecureStore.getItemAsync(STORAGE_KEYS[key]);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error('Error retrieving object:', error);
      return null;
    }
  },

  async clearAll() {
    try {
      await SecureStore.deleteItemAsync(STORAGE_KEYS.IS_FIRST_TIME);
    } catch (error) {
      console.error('Error clearing all:', error);
    }
  }
};
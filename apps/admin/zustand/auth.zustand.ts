import { createStore } from 'zustand-x';

type TUserData = { email: string };
interface AuthStore {
  isLoggedIn: boolean;
  userData: TUserData | null;
}

const initialState: AuthStore = {
  isLoggedIn: false,
  userData: null,
};

export const authStore = createStore<AuthStore>(initialState, {
  name: 'authStore',
  persist: true,
  mutative: true,
}).extendActions(api => ({
  setIsLoggedIn: (isLoggedIn: boolean) => {
    api.set('isLoggedIn', isLoggedIn);
  },
  setUserData: (userData: TUserData | null) => {
    api.set('userData', userData);
  },
  reset: () => {
    api.set('isLoggedIn', false);
    api.set('userData', null);
  },
}));

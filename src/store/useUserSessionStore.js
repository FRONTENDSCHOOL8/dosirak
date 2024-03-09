import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const initialState = {
  loginUser: {},
};

const createState = persist(
  (set) => ({
    ...initialState,

    setLoginUser: (value) => set(() => ({ loginUser: value })),
  }),
  {
    name: 'loginUserInfo',
    storage: createJSONStorage(() => sessionStorage),
  }
);

const useUserSessionStore = create(createState);

export default useUserSessionStore;

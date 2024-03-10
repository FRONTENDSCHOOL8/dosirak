import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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
  }
);

const useUserPersistStore = create(createState);

export default useUserPersistStore;

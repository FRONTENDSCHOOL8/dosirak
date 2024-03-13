import { create } from 'zustand';

const initialState = {
  isPending: false,
  isSplashPlay: false,
};

const createState = (set) => ({
  ...initialState,

  setIsSplashPlay: (value) => set(() => ({ isSplashPlay: value })),
  setIsPending: (value) => set(() => ({ isPending: value })),
});

const useCommonStore = create(createState);

export default useCommonStore;

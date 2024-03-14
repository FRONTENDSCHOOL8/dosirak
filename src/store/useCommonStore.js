import { create } from 'zustand';

const initialState = {
  isPending: false,
  isSplashPlay: false,
  isAdvertising: true,
};

const createState = (set) => ({
  ...initialState,

  setIsSplashPlay: (value) => set(() => ({ isSplashPlay: value })),
  setIsPending: (value) => set(() => ({ isPending: value })),
  setIsAdvertising: (value) => set(() => ({ isAdvertising: value })),
});

const useCommonStore = create(createState);

export default useCommonStore;

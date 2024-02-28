import { create } from 'zustand';

const initialState = {
  isPending: false,
};

const createState = (set) => ({
  ...initialState,

  setIsPending: (value) => set(() => ({ isPending: value })),
});

const useCommonStore = create(createState);

export default useCommonStore;

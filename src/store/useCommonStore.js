import { create } from 'zustand';

const initialState = {
  isPending: false,
  loginUser: '',
};

const createState = (set) => ({
  ...initialState,

  setLoginUser: (value) => set(() => ({ loginUser: value })),
  setIsPending: (value) => set(() => ({ isPending: value })),
});

const useCommonStore = create(createState);

export default useCommonStore;

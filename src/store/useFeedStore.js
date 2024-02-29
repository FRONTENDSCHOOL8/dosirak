import { create } from 'zustand';

const initialState = {
  expandFeed: '',
};

const createState = (set) => ({
  ...initialState,

  setExpandFeed: (value) => set(() => ({ expandFeed: value })),
});

const useFeedStore = create(createState);

export default useFeedStore;

import { create } from 'zustand';

const initialState = {
  expandFeed: '',
};

const createState = (set) => ({
  ...initialState,

  setExpandFeed: (value) =>
    set((state) => {
      if (state.expandFeed === value) return { expandFeed: '' };

      return { expandFeed: value };
    }),
});

const useFeedStore = create(createState);

export default useFeedStore;

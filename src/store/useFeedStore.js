import { create } from 'zustand';

const initialState = {
  expandFeed: '',
  commentView: '',
};

const createState = (set) => ({
  ...initialState,

  setExpandFeed: (value) =>
    set((state) => {
      if (state.expandFeed === value) return { expandFeed: '' };

      return { expandFeed: value };
    }),
  setCommentView: (value) =>
    set((state) => {
      return { commentView: value };
    }),
});

const useFeedStore = create(createState);

export default useFeedStore;

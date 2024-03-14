
import { create } from "zustand";

const initialState = {
  hearts: {},
};

const createState = (set) => ({
  ...initialState,
  toggleHeart: (id) => set((state) => ({
    hearts: {
      ...state.hearts,
      [id]: !state.hearts[id],
    },
  })),
})

const postStore = create(createState);

export default postStore;
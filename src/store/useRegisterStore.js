
import { create } from "zustand";

const initialState = {
  step: 0,
};

const createState = (set) => ({
  ...initialState,
  nextStep: () => set(state => ({step: state.step + 1})),
  prevStep: () => set(state => ({step: state.step - 1})),
})

const useRegisterStore = create(createState);

export default useRegisterStore;
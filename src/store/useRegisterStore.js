
import { create } from "zustand";

const initialState = {
  step: 0,
  nameValue: '',
  phoneValue: '',
  authValue: '',
  idValue: '',
  passwordValue: '',
  confirmValue: '',
  checkValue: {},
};

const createState = (set) => ({
  ...initialState,
  nextStep: () => set(state => ({step: state.step + 1})),
  prevStep: () => set(state => ({step: state.step - 1})),

  setNameValue: (e) => set(() => ({nameValue: e.target.value})),
  setPhoneValue: (e) => set(() => ({phoneValue: e.target.value})),
  setAuthValue: (e) => set(() => ({authValue: e.target.value})),
  setIdValue: (e) => set(() => ({idValue: e.target.value})),
  setPasswordValue: (e) => set(() => ({passwordValue: e.target.value})),
  setConfirmValue: (e) => set(() => ({confirmValue: e.target.value})),
})

const useRegisterStore = create(createState);

export default useRegisterStore;
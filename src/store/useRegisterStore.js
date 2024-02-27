
import { create } from "zustand";

const initialState = {
  step: 0,
  nameValue: '',
  phoneValue: '',
  authValue: null,
  authTypeValue: '',
  isCheckAuth: 0,
  idValue: '',
  passwordValue: '',
  confirmValue: '',
  checkValue: {},
  isPhoneAuthProcess: false,
};

const createState = (set) => ({
  ...initialState,
  nextStep: () => set((state) => ({step: state.step + 1})),
  prevStep: () => set((state) => ({step: state.step - 1})),

  setNameValue: (e) => set(() => ({nameValue: e.target.value})),

  setPhoneValue: (e) => set(() => ({phoneValue: e.target.value})),
  setAuthValue: (value) => set(() => ({authValue: value})),
  setAuthTypeValue: (e) => set(() => ({authTypeValue: e.target.value})),
  changePhoneAuthProcess: () => set((state) => ({isPhoneAuthProcess: !state.isPhoneAuthProcess})),
  changeCheckAuth: (value) => set(() => ({isCheckAuth: value})),

  setIdValue: (e) => set(() => ({idValue: e.target.value})),
  setPasswordValue: (e) => set(() => ({passwordValue: e.target.value})),
  setConfirmValue: (e) => set(() => ({confirmValue: e.target.value})),

  clearRegisterState: () => {
    set(initialState)
  }
})

const useRegisterStore = create(createState);

export default useRegisterStore;
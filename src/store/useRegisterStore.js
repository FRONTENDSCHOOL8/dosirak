import { create } from 'zustand';

const initialState = {
  step: 0,
  nameValue: '',
  phoneValue: '',
  authValue: null,
  authTypeValue: '',
  isPhoneAuthProcess: false,
  isCheckAuth: 0,
  idValue: '',
  isIdDuplicate: null,
  passwordValue: '',
  isPwVisible: false,
  confirmValue: '',
  isCfVisible: false,
  checkValue: [],
};

const createState = (set) => ({
  ...initialState,
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),

  setNameValue: (e) => set(() => ({ nameValue: e.target.value })),

  setPhoneValue: (e) => set(() => ({ phoneValue: e.target.value })),
  setAuthValue: (value) => set(() => ({ authValue: value })),
  setAuthTypeValue: (e) => set(() => ({ authTypeValue: e.target.value })),
  changePhoneAuthProcess: () =>
    set((state) => ({ isPhoneAuthProcess: !state.isPhoneAuthProcess })),
  changeCheckAuth: (value) => set(() => ({ isCheckAuth: value })),

  setIdValue: (e) => set(() => ({ idValue: e.target.value })),
  setPasswordValue: (e) => set(() => ({ passwordValue: e.target.value })),
  setConfirmValue: (e) => set(() => ({ confirmValue: e.target.value })),
  setCheckResult: (value) => set(() => ({ isIdDuplicate: value })),
  changeVisible: (target) =>
    set((state) => {
      if (target === 'password') {
        return { isPwVisible: !state.isPwVisible };
      }
      if (target === 'confirm') {
        return { isCfVisible: !state.isCfVisible };
      }
    }),

  setCheckValue: (checkArray) => set(() => ({ checkValue: checkArray })),

  clearRegisterState: () => {
    set(initialState);
  },
});

const useRegisterStore = create(createState);

export default useRegisterStore;

import { create } from 'zustand';

const initialState = {
  idValue: '',
  passwordValue: '',
  isLoginError: false,
};

const createState = (set) => ({
  ...initialState,

  setIdValue: (e) => set(() => ({ idValue: e.target.value })),
  setPasswordValue: (e) => set(() => ({ passwordValue: e.target.value })),

  setIsLoginError: (value) => set(() => ({ isLoginError: value })),

  clearLoginState: () => set(initialState),
});

const useLoginStore = create(createState);

export default useLoginStore;

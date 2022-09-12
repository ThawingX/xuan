import { defineStore } from 'pinia'
export const useLoginPageStore = defineStore('loginPage', {
  state: () => {
    return {
      isShowRegisterForm: false,
      isShowRecallPwdForm: false,
    }
  },
  getters: {
  },
  actions: {

  },
})

import { defineStore } from 'pinia'
export const useLoginFormStore = defineStore('loginForm', {
  state: () => {
    return {
      account: '',
      password: '',
    }
  },
  getters: {
  },
  actions: {

  },
})

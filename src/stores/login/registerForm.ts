import { defineStore } from 'pinia'
export const useRegisterFormStore = defineStore('registerForm', {
  state: () => {
    return {
      name: '',
      phone: '',
      email: '',
      IDNumber: '',
      type: ''
    }
  },
  getters: {
  },
  actions: {

  },
})

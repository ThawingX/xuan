import { defineStore } from 'pinia'

export const useOptionStore = defineStore('optionStore', {
  state: () => {
    return {
      subOption: {
        id: '',
        optionName: '',
        subOptionName: '',
        commiter: '',
      },
      optionList: [],
    }
  },
  getters: {
  },
  actions: {

  },
})

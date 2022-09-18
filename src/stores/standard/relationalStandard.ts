import { defineStore } from 'pinia'

export const useRelationalStandardStore = defineStore('relationalStandardStore', {
  state: () => {
    return {
      isShowRelationalStandardDialog: false,
      standardId: '',
      subStandardList: [],
    }
  },
  getters: {
  },
  actions: {

  },
})

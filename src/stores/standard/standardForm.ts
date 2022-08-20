import { defineStore } from 'pinia'
export const useStandardFormStore = defineStore('standardForm', {
  state: () => {
    return {
      StandardForm: {
        key: '',
        chName: '',
        enName: '',
        state: '',
        CCS: '',
        ICS: '',
        pubDate: '',
        doDate: '',
        mainDepartment: '',
        centialDepartment: '',
        pubDeparment: '',
        comment: '',
        type: '',
        url: '',
        property: '',
      },
    }
  },
  getters: {
    getStandardForm(): any {
      return this.StandardForm
    },
  },
  actions: {
  },
})

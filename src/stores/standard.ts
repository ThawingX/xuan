import { defineStore } from 'pinia'
export const useStandardStore = defineStore('standard', {
  state: () => {
    return {
      standardLists: [],
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
      },
    }
  },
  actions: {

  },
})

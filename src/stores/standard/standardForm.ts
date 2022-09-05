import { defineStore } from 'pinia'
export const useStandardFormStore = defineStore('standardForm', {
  state: () => {
    return {
      StandardForm: {
        id: '',
        chName: '',
        enName: '',
        standardType: '',
        state: '',
        property: '',
        city: '',
        CCS: '',
        ICS: '',
        administrativeDepartment: '',
        responsibleDepartment: '',
        releaseDepartment: '',
        comment: '',
        url: '',
        industryClassfication: '',
        ICSClassfication: '',
        implementationTime: '',
        releaseTime: '',
      },
      isShowOptionDialog: false,
      isShowAddOptionDialog: false,
      subOption: {
        id: '',
        optionName: '',
        subOptionName: '',
        commiter: '',
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

import { defineStore } from 'pinia'
export const useStandardFormStore = defineStore('standardForm', {
  state: () => {
    return {
      StandardForm: {
        id: '',
        chName: '',
        enName: '',
        standardType: '国家标准',
        state: '',
        property: '',
        city: '',
        CCS: '',
        ICS: '',
        administrativeDepartment: '',
        responsibleDepartment: '',
        replaceStandard: '',
        comment: '',
        url: '',
        industryClassfication: '',
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

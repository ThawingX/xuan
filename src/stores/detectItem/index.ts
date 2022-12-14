import { defineStore } from 'pinia'
export const useDetectItemStore = defineStore('detectItem', {
  state: () => {
    return {
      detectItem: {
        standardId: '',
        chName: '',
        enName: '',
        detectItemId: '',
        detectItem: '',
        requirement: '',
        detectMethodId: '',
        detectMethod: '',
        equipment: '',
        equipmentRequirement: '',
        description: '',
      },
      detectItemList: [],
      isShowAddDetectItem: false,
      isShowSerchDialog: false,
      standardList: [],
    }
  },
  getters: {

  },
  actions: {
  },
})

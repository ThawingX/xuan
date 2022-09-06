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
      },
      detectItemList: [],
      isShowAddDetectItem: false,
    }
  },
  getters: {

  },
  actions: {
  },
})

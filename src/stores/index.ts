import { defineStore } from 'pinia'
export const useMainStore = defineStore('main', {
  state: () => {
    return {
      topMenuList: [
        {
          mName: '标准',
          route: { path: '/menus/standards' },
        },
        {
          mName: '产品检测',
          route: { path: '/menus/productCheck' },
        },
        {
          mName: '仪器设备',
          route: { path: '/menus/equipment' },
        },
        {
          mName: '标准录入',
          route: { path: '/menus/inputData' },
        },
      ],
    }
  },
  actions: {

  },
})

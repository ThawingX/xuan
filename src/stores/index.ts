import { defineStore } from 'pinia'
export const useMainStore = defineStore('main', {
  state: () => {
    return {
      topMenuList: [
        {
          mName: '标准',
          route: { path: '/menus/standardList' },
        },
        {
          mName: '产品检测',
          route: { path: '/menus/product' },
        },
        {
          mName: '仪器设备',
          route: { path: '/menus/equipment' },
        },
        {
          mName: '标准录入',
          route: { path: '/menus/standardEntry' },
        },
        {
          mName: '检测项录入',
          route: { path: '/menus/testInformationEntry' },
        },
        {
          mName: '用户管理',
          route: { path: '/menus/userManage' },
        },
      ],
    }
  },
  actions: {

  },
})

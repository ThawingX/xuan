import { defineStore } from 'pinia'
export const useMainStore = defineStore('main', {
  state: () => {
    return {
      topMenuList: [
        {
          mName: '标准',
          route: { path: '/menus/standardlist' },
        },
        // {
        //   mName: '产品检测',
        //   route: { path: '/menus/product' },
        // },
        // {
        //   mName: '仪器设备',
        //   route: { path: '/menus/equipment' },
        // },
        {
          mName: '标准录入',
          route: { path: '/menus/standardentry' },
        },
        {
          mName: '检测项录入',
          route: { path: '/menus/testinformationentry' },
        },
        {
          mName: '用户管理',
          route: { path: '/menus/usermanage' },
        },
        {
          mName: '用户申请管理',
          route: { path: '/menus/userapplymanage' },
        },
      ],
    }
  },
  actions: {
    getChRole(enName: String) {
      switch (enName) {
        case 'admin':
          return '管理员'
        case 'researcher':
          return '科研人员'
        case 'equipmentManager':
          return '设备管理人员'
        case 'staff':
          return '内部人员'
        default:
          return '无'
      }
    },
  },
})

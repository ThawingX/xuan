import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { $getAppliedList, $getUserInfo } from '~/composables/http/user'

const router = useRouter()
export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      userInfo: {},
      appliedList: [],
    }
  },
  getters: {
    account: () => {
      return window.localStorage.getItem('account') || ''
    },
  },
  actions: {
    getUserInfo() {
      const account = window.localStorage.getItem('account')
      if (!account) {
        window.localStorage.removeItem('account')
        router.push('/login')
      }
      return new Promise((resolve, reject) => {
        $getUserInfo(account)
          .then((res) => {
            this.userInfo = res.data.result
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getAppliedList() {
      // 鉴权 管理员
      return new Promise((resolve, reject) => {
        $getAppliedList()
          .then((res) => {
            this.appliedList = res.data.result
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
  },
})

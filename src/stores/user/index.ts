import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { $getUserInfo } from '~/composables/http/user'

const router = useRouter()
export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      userInfo: {},
    }
  },
  getters: {
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
  },
})

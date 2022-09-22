import type { Router } from 'vue-router'
import { useUserStore } from '~/stores/user'

export default function registerGuid(router: Router) {
  // 需要在pinia注册后使用，所以放到这里面
  const userStore = useUserStore()
  router.beforeEach(async (to, from, next) => {
    const account = userStore.account
    if (!account) {
      if (to.fullPath !== '/login')
        return next('/login')
    }
    else {
      if (to.fullPath === '/login')
        return next('/menus')
      // 暂时每一次切换路由都进行登录信息查询
      // if (!Object.keys(userStore.userInfo).length) {
      const res = await userStore.getUserInfo()
      // 如果查询不到当前用户信息，说明系统出错，直接返回到登录页面，之后做逻辑修改
      if (res.data.code !== 1) {
        window.localStorage.removeItem('account')
        return next('/login')
      }
      // }
    }

    return next()
  })
}

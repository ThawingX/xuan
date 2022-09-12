import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import routes from 'virtual:generated-pages'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/main.css'
import registerGuid from './router/routerGuid'

import App from './App.vue'

const pinia = createPinia()
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
const app = createApp(App)
app.use(pinia)

// 将路由守卫注册到路由中, 在路由守卫中使用了pinia，所以放在pinia之后
registerGuid(router)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

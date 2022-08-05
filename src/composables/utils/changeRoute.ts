import { useRouter } from 'vue-router';
import { h } from 'vue'
import { ElNotification } from 'element-plus'
const router = useRouter()
const selfNotification = () => {
  ElNotification({
    title: '跳转',
    message: h('i', { style: 'color: teal' }, '自动跳转到标准页，根页面保留使用'),
  })
}
export default function (router:Object = {}) {
  selfNotification()
  router.push('/menus')
  return function (url:string = '/menus') {
  }
}
<script lang="ts" setup>
import { h, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
const router = useRouter()
const turnToStandardPage = () => {
  ElNotification({
    title: '跳转',
    message: h('i', { style: 'color: teal' }, '自动跳转到标准页，根页面保留使用'),
  })
}
onMounted(() => {
  turnToStandardPage()
  router.push('/menus/standardList')
})
</script>

<template>
  <span>this is page what has not finished yet.</span>
  <br>
  <router-link border to="/menus">
    Here is main page
  </router-link>
</template>

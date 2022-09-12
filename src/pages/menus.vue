<script setup lang="ts">
import { onMounted, h } from 'vue'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import { useMainStore } from '~/stores'
const mainStore = useMainStore()
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
  <header flex justify-center gap16>
    <!-- key需要注意修改 -->
    <router-link v-for="row of mainStore.topMenuList" :key="row.mName" m1 active-class="active" class="menus" text-sm
      :to="row.route">
      {{ row.mName }}
    </router-link>
  </header>
  <div class="container" flex justify-center items-start>
    <router-view />
  </div>
</template>

<style scoped>
header {
  background-color: var(--bg-show-header-gray);
}

.container {
  width: 85%;
  height: 100%;
  margin: 0 auto;
  background-color: var(--bg-white);
}

.menus {
  color: var(--font-gray)
}

.active {
  color: black;
}
</style>

<script lang="ts" setup>
  // 做页面缓存
import { onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
onMounted(() => {
  const oldRoute = JSON.parse(window.sessionStorage.getItem('route'))
  if (oldRoute)
    router.replace(oldRoute)
})

watch(route, (newVal, oldVal) => {
  window.sessionStorage.setItem('route', JSON.stringify(newVal))
})
</script>

<template>
  <!-- TODO(8/8-8/12):1. 搜索连续性问题 √
          2. 数据录入新分类 ×
          3. 样式 -
          4. 其他标准页面 √
          5. 额外，重构代码 √ -->
  <!--
    img src路径过于冗余，可读性差，需要修改
   -->
  <!--
    TODO(8/15-8/19): 1. img.src冗余路径的处理
          2. 样式优化 √
          3. 关键词检索标准功能添加 √
          4. 梳理代码，剔除冗余代码 √
          5. 根据反馈，迭代更新代码 √
    -->
  <!--
    TODO(9/4-9/12):
          1. 关键词检索，展开剩余项
          2. 删除标准侧栏 √
          3. 检测项录入 √
          4. 标准录入， 上传标准发生在标准详情
          5. 标准详情，标准详情页的展示
          6. 美化标准显示页和标准详情页
          7. 分标准类型进行录入
    -->

  <div class="appContainer" flex items-start flex-col>
    <Header />
    <Main />
    <!-- <Footer /> -->
  </div>
</template>

<style scoped>
  /* .appContainer{
    background-color: var(--bg-blue-shallow);
    width:100vw;
    height:100vh;
  } */
</style>

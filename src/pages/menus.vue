<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router';
interface Menu {
  mName: String,
  route: RouteLocationRaw
}

const Menus: Menu[] = [
  {
    mName: '标准',
    route: { path: '/menus/standards' }
  },
  {
    mName: '产品检测',
    route: { path: '/menus/productCheck' }
  },
  {
    mName: '仪器设备',
    route: { path: '/menus/equipment' }
  },
  {
    mName: '标准录入',
    route: { path: '/menus/inputData' }
  }
]
</script>

<template>
  <header flex justify-center gap16>
    <router-link :to='row.route' v-for="row of Menus">
      {{ row.mName }}
    </router-link>
  </header>
  <router-view></router-view>
</template>
<style>
header {
  background-color: var(--bg-show-header-gray);
}
</style>

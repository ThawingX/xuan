<script setup lang="ts">
import { useMainStore } from '~/stores'
const mainStore = useMainStore()
</script>

<template>
  <header flex justify-center gap16>
    <!-- key需要注意修改 -->
    <router-link v-for="row of mainStore.topMenuList" :key="row.mName" :to="row.route">
      {{ row.mName }}
    </router-link>
  </header>
  <router-view />
</template>

<style>
header {
  background-color: var(--bg-show-header-gray);
}
</style>

<script setup lang="ts">
import { useMainStore } from '~/stores'
const mainStore = useMainStore()
</script>

<template>
  <header flex justify-center gap16>
    <!-- key需要注意修改 -->
    <router-link v-for="row of mainStore.topMenuList" :key="row.mName" m1 active-class="active" class="menus" text-xs :to="row.route">
      {{ row.mName }}
    </router-link>
  </header>
  <router-view />
</template>

<style scoped>
header {
  background-color: var(--bg-show-header-gray);
}
.menus{
  color:var(--font-gray)
}
.active{
  color:black;
}
</style>

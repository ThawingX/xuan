<script setup lang="ts">
import { useMainStore } from '~/stores'
const mainStore = useMainStore()
</script>

<template>
  <header flex justify-center gap16>
    <!-- key需要注意修改 -->
    <router-link
      v-for="row of mainStore.topMenuList" :key="row.mName" m1 active-class="active" class="menus" text-sm
      :to="row.route"
    >
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
  margin: 0 auto;
  background-color: var(--bg-white);
  animation:openMain 0.8s ease;
}
@keyframes openMain{
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
.menus {
  color: var(--font-gray)
}

.active {
  color: black;
}
</style>

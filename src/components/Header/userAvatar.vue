<script lang="ts" setup>
import { computed } from 'vue'
import { useUserStore } from '~/stores/user'
const userStore = useUserStore()

const userName = computed(() => {
  return userStore.userInfo.name?.toUpperCase().substring(0, 1)
})
</script>

<template>
  <div class="container" mr6 flex justify-end items-end gap-2>
    <span class="account" text-sm text-end>
      {{ userStore.userInfo.account }}
    </span>
    <el-avatar :size="40" fit="fill" :alt="userStore.userInfo.name">
      {{ userName }}
    </el-avatar>
  </div>
</template>

<style scoped>
.account{
    color:var(--font-blue-shallow)
}
</style>

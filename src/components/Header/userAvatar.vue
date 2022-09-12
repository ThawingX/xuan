<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '~/stores/user'
const userStore = useUserStore()
const router = useRouter()

const dropDownMenu = ref()
const userName = computed(() => {
  return userStore.userInfo.name?.toUpperCase().substring(0, 1)
})

const openAvatarMenu = function (e: Event) {
  dropDownMenu.value.handleOpen()
}

const logOut = function () {
  if (window.localStorage.getItem('account'))
    window.localStorage.removeItem('account')

  router.push('/login')
}
</script>

<template>
  <div class="container" mr6 flex justify-end items-end gap-2>
    <span class="account" text-sm text-end>
      {{ userStore.userInfo.account }}
    </span>
    <el-dropdown ref="dropDownMenu" trigger="contextmenu" placement="top-start" class="dropDownMenu">
      <el-avatar :size="40" fit="fill" :alt="userStore.userInfo.name" @click="openAvatarMenu($event)">
        {{ userName }}
      </el-avatar>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="logOut">
            退出登录
          </el-dropdown-item>
          <el-dropdown-item disabled>
            更换用户
          </el-dropdown-item>
          <el-dropdown-item disabled>
            找回密码
          </el-dropdown-item>
          <el-dropdown-item disabled>
            联系管理员
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style scoped>
.account{
    color:var(--font-blue-shallow)
}
.dropDownMenu{
  width:5rem;
}
</style>

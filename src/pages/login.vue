<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'
import { useLoginFormStore } from '~/stores/login/loginForm'
import { useRegisterFormStore } from '~/stores/login/registerForm'
import { useLoginPageStore } from '~/stores/login/loginPage'
const router = useRouter()
const LoginFormStore = useLoginFormStore()
const registerFormStore = useRegisterFormStore()
const loginPageStore = useLoginPageStore()
const openRegisterBox = function () {
  ElMessageBox.confirm(
    '是否联系管理员，获取账号？',
    '警告',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    },
  )
    .then(() => {
      registerFormStore.$reset()
      loginPageStore.isShowRegisterForm = true
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '打开失败，请稍后重试',
      })
    })
}

const sendRegisterRequest = function () {
  ElNotification({
    title: '成功',
    message: '申请成功，请等待管理员审核',
    type: 'success',
  })
  loginPageStore.isShowRegisterForm = false
}
const recallPassword = function () {
  ElMessageBox.confirm(
    '是否联系管理员，获取密码？',
    '警告',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    },
  )
    .then(() => {
      ElNotification({
        title: '成功',
        message: '请稍后查看邮箱或手机',
        type: 'success',
      })
    })
    .catch(() => {
    })
}
const login = function () {
  //  发请求
  ElMessage({
    message: '登录成功',
    type: 'success',
  })
  router.push('/')
}
</script>

<template>
  <div class="container" flex justify-center items-center>
    <div class="loginBox" flex justify-center items-center flex-col>
      <div class="loginForm">
        <el-form :model="LoginFormStore" label-width="4rem">
          <el-form-item label="账号">
            <el-input v-model="LoginFormStore.account" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="LoginFormStore.password" />
          </el-form-item>
        </el-form>
      </div>
      <div class="buttonGroup">
        <el-button size="small" type="warning" @click="openRegisterBox">
          申请账号
        </el-button>
        <el-button size="small" type="info" @click="recallPassword">
          找回密码
        </el-button>
        <el-button size="small" type="primary" @click="login">
          登录
        </el-button>
      </div>
    </div>
  </div>
  <registerDialog />
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}

.loginBox {
  width: 40rem;
  height: 20rem;
  box-shadow: 0 0 3px var(--border-gray-deep)
}
</style>

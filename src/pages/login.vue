<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'
import { useLoginFormStore } from '~/stores/login/loginForm'
import { useRegisterFormStore } from '~/stores/login/registerFormtss'
import { useLoginPageStore } from '~/stores/login/loginPage'
import { $login } from '~/composables/http/login'
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
    .then((res) => {
      registerFormStore.$reset()
      loginPageStore.isShowRegisterForm = true
    })
    .catch((err) => {
      console.log(err)
    })
}
const openRecallPwdBox = function () {
  ElMessageBox.confirm(
    '是否联系管理员，找回密码？',
    '警告',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    },
  )
    .then((res) => {
      registerFormStore.$reset()
      loginPageStore.isShowRecallPwdForm = true
    })
    .catch((err) => {
      console.log(err)
    })
}

const login = function () {
  $login(LoginFormStore)
    .then((res) => {
      const { code, message, result } = res.data
      if (code) {
        // document.cookie = `token=${result.token}`
        window.localStorage.setItem('account', result.account)
        if (window.localStorage.getItem('account')) {
          ElMessage.success(message)
          router.push('/menus')
        } else {
          ElMessage.error('请重试')
        }
      } else {
        ElMessage.error(message)
      }
    })
    .catch((err) => {
      ElMessage.error('失败，请检查网络或其他')
    })
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
            <el-input type="password" v-model="LoginFormStore.password" />
          </el-form-item>
        </el-form>
      </div>
      <div class="buttonGroup">
        <el-button size="small" type="warning" @click="openRegisterBox">
          申请账号
        </el-button>
        <el-button size="small" type="info" @click="openRecallPwdBox">
          找回密码
        </el-button>
        <el-button size="small" type="primary" @click="login">
          登录
        </el-button>
      </div>
    </div>
  </div>
  <registerDialog />
  <recallPwdDialog />
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

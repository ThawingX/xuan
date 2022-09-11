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
const registerAccount = function () {
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
      loginPageStore.isShowRegisterForm = true
    })
    .catch(() => {
    })
}
const sendRegisterRequest = function () {
  ElNotification({
    title: '成功',
    message: '申请成功，请等待管理员审核',
    type: 'success',
  })
  isShowRegister.value = false
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
        <el-form :model="loginForm" label-width="4rem">
          <el-form-item label="账号">
            <el-input v-model="loginForm.account" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="loginForm.password" />
          </el-form-item>
        </el-form>
      </div>
      <div class="buttonGroup">
        <el-button size="small" type="warning" @click="registerAccount">
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
  <el-dialog v-model="isShowRegister" title="填写信息">
    <el-form :model="registerForm">
      <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-input v-model="registerForm.name" />
      </el-form-item>
      <el-form-item label="手机号码" :label-width="formLabelWidth">
        <el-input v-model="registerForm.phone" />
      </el-form-item>
      <el-form-item label="邮箱" :label-width="formLabelWidth">
        <el-input v-model="registerForm.email" />
      </el-form-item>
      <el-form-item label="身份证号码" :label-width="formLabelWidth">
        <el-input v-model="registerForm.IDNumber" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="isShowRegister = false">Cancel</el-button>
        <el-button type="primary" @click="sendRegisterRequest">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
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

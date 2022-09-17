<script lang="ts" setup>
import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'
import { $apply } from '../../composables/http/login.ts'
import { useLoginPageStore } from '~/stores/login/loginPage'
import { useRegisterFormStore } from '~/stores/login/registerForm'
const loginPageStore = useLoginPageStore()
const registerFormStore = useRegisterFormStore()

const sendRegisterRequest = function () {
  registerFormStore.typeName = '申请账号'
  registerFormStore.type = 'apply'
  $apply(registerFormStore)
    .then((res) => {
      const { code, message, result } = res.data
      if (code) {
        ElMessage({
          message,
          type: 'success',
        })
        loginPageStore.isShowRegisterForm = false
      }
      else {
        ElMessage({
          message,
          type: 'error',
        })
      }
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>

<template>
  <el-dialog v-model="loginPageStore.isShowRegisterForm" title="申请账号">
    <el-form :model="registerFormStore">
      <el-form-item label="姓名" label-width="10rem">
        <el-input v-model="registerFormStore.name" />
      </el-form-item>
      <el-form-item label="手机号码" label-width="10rem">
        <el-input v-model="registerFormStore.phone" />
      </el-form-item>
      <el-form-item label="邮箱" label-width="10rem">
        <el-input v-model="registerFormStore.email" />
      </el-form-item>
      <el-form-item label="身份证号码" label-width="10rem">
        <el-input v-model="registerFormStore.IDNumber" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="loginPageStore.isShowRegisterForm = false">取消</el-button>
        <el-button type="primary" @click="sendRegisterRequest">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

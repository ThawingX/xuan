<script lang="ts" setup></script>

<template>
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

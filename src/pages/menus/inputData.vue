<template>
  <main flex justify-center items-center pt5>
    <div class="container">
      <el-form size="large" :model="form" label-width="8rem">
        <el-form-item label="标准号">
          <el-input v-model="form.key" />
        </el-form-item>
        <el-form-item label="中文标准名称">
          <el-input v-model="form.chName" />
        </el-form-item>
        <el-form-item label="英文标准名称">
          <el-input v-model="form.enName" />
        </el-form-item>
        <el-form-item label="中文标准分类号">
          <el-input v-model="form.CCS" />
        </el-form-item>
        <el-form-item label="英文标准分类号">
          <el-input v-model="form.ICS" />
        </el-form-item>
        <el-form-item label="发布日期">
          <el-input v-model="form.pubDate" />
        </el-form-item>
        <el-form-item label="实施日期">
          <el-input v-model="form.doDate" />
        </el-form-item>
        <el-form-item label="归口部门">
          <el-input v-model="form.centialDepartment" />
        </el-form-item>
        <el-form-item label="主管部门">
          <el-input v-model="form.mainDepartment" />
        </el-form-item>
        <el-form-item label="发布单位">
          <el-input v-model="form.pubDeparment" />
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="form.comment" />
        </el-form-item>
        <el-form-item label="标准类型">
          <el-select v-model="form.type" placeholder="请选择标准的类型">
            <el-option label="国家标准" value="NationalStandard" />
            <el-option label="行业标准" value="IndustryStandard" />
            <el-option label="地方标准" value="LocalStandard" />
            <el-option label="团体标准" value="groupStandard" />
            <el-option label="国际标准" value="InternationalStandard" />
            <el-option label="企业标准" value="EnterpriseStandard" />
          </el-select>
        </el-form-item>

      </el-form>
      <div class="submitContainer" justify-center flex flex-col>
        <el-button inline-block right-0 color-black type="success" @click="onSubmit()">submit</el-button>
        <el-upload :data="{ ...form }" mt-2 self-center ref="upload" class='upload'
          action="http://119.3.243.150:3300/uploadFile" :limit="1" :on-exceed="handleExceed" :auto-upload="false">
          <template #trigger>
            <el-button color-black type="primary">选择源标准</el-button>
          </template>
          <el-button color-black class="ml-3" type="success" @click="submitUpload">
            上传标准文件
          </el-button>
        </el-upload>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import axios from 'axios'
import { genFileId } from 'element-plus'
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'
import type { Form } from './standards/types/form'
const upload = ref<UploadInstance>()

const handleExceed: UploadProps['onExceed'] = (files) => {
  upload.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value!.handleStart(file)
}

const submitUpload = () => {
  upload.value!.submit()
}
// do not use same name with ref
const form: Form = reactive({
  key: '',
  chName: '',
  enName: '',
  state: '',
  CCS: '',
  ICS: '',
  pubDate: '',
  doDate: '',
  mainDepartment: '',
  centialDepartment: '',
  pubDeparment: '',
  comment: '',
  type: '',
  url: ''
})
const config = {
  method: 'post',
  url: 'http://119.3.243.150:3300/upload',
  headers: {},
  data: form
};

const onSubmit = () => {
  axios(config)
    .then(function (response: any) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error: any) {
      console.log(error);
    });

}
</script>
<style scoped>
</style>
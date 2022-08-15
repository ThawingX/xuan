<script lang="ts" setup>
import { ref } from 'vue'
import { genFileId } from 'element-plus'

import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'

import { $upload } from '~/composables/http'
import { useStandardStore } from '~/stores/standard'
const upload = ref<UploadInstance>()
const standardStore = useStandardStore()

const handleExceed: UploadProps['onExceed'] = (files) => {
  upload.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value!.handleStart(file)
}
const submitUpload = () => {
  upload.value!.submit()
}

const onSubmit = () => {
  $upload(standardStore.StandardForm)
    .then((response: any) => {
      console.log(JSON.stringify(response.data))
      alert('submit成功，请提交源标准文件')
    })
    .catch((error: any) => {
      console.log(error)
      alert('submit失败，请重试')
    })
}
</script>

<template>
  <main flex justify-center items-center pt5>
    <div class="container">
      <el-form size="large" :model="standardStore.StandardForm" label-width="8rem">
        <div class="inlineContainer" flex justify-center items-center>
          <div class="left">
            <el-form-item label="标准号">
              <el-input v-model="standardStore.StandardForm.key" />
            </el-form-item>
            <el-form-item label="中文标准名称">
              <el-input v-model="standardStore.StandardForm.chName" />
            </el-form-item>
            <el-form-item label="英文标准名称">
              <el-input v-model="standardStore.StandardForm.enName" />
            </el-form-item>
            <el-form-item label="标准状态">
              <el-select v-model="standardStore.StandardForm.state" placeholder="请选择标准的状态">
                <el-option
                  v-for="row of standardStore.stateLists" :key="row.mName" :label="row.mName"
                  :value="row.requestKey"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="中文标准分类号">
              <el-input v-model="standardStore.StandardForm.CCS" />
            </el-form-item>
            <el-form-item label="英文标准分类号">
              <el-input v-model="standardStore.StandardForm.ICS" />
            </el-form-item>
            <el-form-item label="标准性质">
              <el-select v-model="standardStore.StandardForm.property" placeholder="请选择标准的性质">
                <el-option
                  v-for="row of standardStore.propertyLists" :key="row.mName" :label="row.mName"
                  :value="row.requestKey"
                />
              </el-select>
            </el-form-item>
          </div>
          <div class="right">
            <el-form-item label="发布日期">
              <el-input v-model="standardStore.StandardForm.pubDate" />
            </el-form-item>
            <el-form-item label="实施日期">
              <el-input v-model="standardStore.StandardForm.doDate" />
            </el-form-item>
            <el-form-item label="归口部门">
              <el-input v-model="standardStore.StandardForm.centialDepartment" />
            </el-form-item>
            <el-form-item label="主管部门">
              <el-input v-model="standardStore.StandardForm.mainDepartment" />
            </el-form-item>
            <el-form-item label="发布单位">
              <el-input v-model="standardStore.StandardForm.pubDeparment" />
            </el-form-item>
            <el-form-item label="备注">
              <el-input v-model="standardStore.StandardForm.comment" />
            </el-form-item>
            <el-form-item label="标准类型">
              <el-select v-model="standardStore.StandardForm.type" placeholder="请选择标准的类型">
                <el-option
                  v-for="row of standardStore.typeLists" :key="row.mName" :label="row.mName"
                  :value="row.requestKey"
                />
              </el-select>
            </el-form-item>
          </div>
        </div>
      </el-form>
      <div class="submitContainer" justify-center flex flex-col>
        <el-button inline-block right-0 color-black type="success" @click="onSubmit()">
          submit
        </el-button>
        <el-upload
          ref="upload" :data="{ ...standardStore.StandardForm }" mt-2 self-center class="upload"
          action="http://119.3.243.150:3300/uploadFile" :limit="1" :on-exceed="handleExceed" :auto-upload="false"
        >
          <template #trigger>
            <el-button color-black type="primary">
              选择源标准
            </el-button>
          </template>
          <el-button color-black class="ml-3" type="success" @click="submitUpload">
            上传标准文件
          </el-button>
        </el-upload>
      </div>
    </div>
  </main>
</template>

<style scoped>
</style>

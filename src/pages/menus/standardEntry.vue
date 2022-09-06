<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { genFileId } from 'element-plus'
import type { FormInstance, FormRules, UploadInstance, UploadProps, UploadRawFile } from 'element-plus'

import { $submit } from '~/composables/http'
import { useStandardFormStore } from '~/stores/standard/standardForm'
import { useStandardStore } from '~/stores/standard'
import { useOptionStore } from '~/stores/standard/subOption'
const upload = ref<UploadInstance>()
const standardFormStore = useStandardFormStore()
const standardStore = useStandardStore()
const optionStore = useOptionStore()
const handleExceed: UploadProps['onExceed'] = (files) => {
  upload.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value!.handleStart(file)
}
const submitUpload = () => {
  upload.value!.submit()
}

const onSubmit = async (ruleFormRef: FormInstance | undefined) => {
  if (!ruleFormRef)
    return

  await ruleFormRef.validate((valid, fields) => {
    if (valid) {
      try {
        $submit(standardFormStore.StandardForm)
          .then((response: any) => {
            console.log(response)
            alert('submit成功,请到标准详情进行源标准的上传')
          })
          .catch((error: any) => {
            console.log(error)
            alert('submit失败，请重试')
          })
          .finally(() => {
            standardFormStore.$reset()
          })
      }
      catch (err) {
        console.log(err)
      }
      finally {
        standardFormStore.$reset()
      }
    }
    else {
      console.log('error submit!!')
      return false
    }
  })
}
const handleOption = function (val: String) {
  optionStore.$reset()
  optionStore.subOption.optionName = val
  standardFormStore.isShowOptionDialog = true
}
const ruleFormRef = ref<FormInstance>()
const standardRules = reactive<FormRules>({
  id: [
    { required: true, message: '请输入标准号', trigger: 'blur' },
  ],
  chName: [
    { required: true, message: '请输入中文标准名称', trigger: 'blur' },
  ],
  standardType: [
    { required: true, message: '请选择标准类型', trigger: 'change' },
  ],
  releaseTime: [
    { required: true, message: '请选择发布日期', trigger: 'blur' },
  ],
  implementationTime: [
    { required: true, message: '请选择发布日期', trigger: 'blur' },
  ],
  state: [
    { required: true, message: '请选择标准状态', trigger: 'change' },
  ],
  property: [
    { required: true, message: '请选择标准性质', trigger: 'change' },
  ],
  city: [
    { required: true, message: '请选择区域', trigger: 'change' },
  ],
  industryClassfication: [
    { required: true, message: '请选择行业', trigger: 'blur' },
  ],
  ICSClassfication: [
    { required: true, message: '请选择ICS', trigger: 'blur' },
  ],
  administrativeDepartment: [
    { required: true, message: '请选择归口单位', trigger: 'blur' },
  ],
  releaseDepartment: [
    { required: true, message: '请选择发布单位', trigger: 'blur' },
  ],
})
</script>

<template>
  <main flex justify-center items-center pt5>
    <div class="container">
      <el-form ref="ruleFormRef" :rules="standardRules" status-icon size="large" :model="standardFormStore.StandardForm" label-width="10rem">
        <div class="inlineContainer" m6 flex justify-center items-start>
          <div class="left">
            <el-form-item label="标准号" prop="id">
              <el-tooltip placement="top-start">
                <template #content>
                  可能的格式：<br>
                  GB 0000.0 <br>
                  GB/T 0000.0 <br>
                  XX 00000
                </template>
                <el-input v-model="standardFormStore.StandardForm.id" />
              </el-tooltip>
            </el-form-item>
            <el-form-item label="中文标准名称" prop="chName">
              <el-input v-model="standardFormStore.StandardForm.chName" />
            </el-form-item>
            <el-form-item label="英文标准名称" prop="enName">
              <el-input v-model="standardFormStore.StandardForm.enName" />
            </el-form-item>
            <el-form-item label="中文标准分类号">
              <el-input v-model="standardFormStore.StandardForm.CCS" />
            </el-form-item>
            <el-form-item label="英文标准分类号">
              <el-input v-model="standardFormStore.StandardForm.ICS" />
            </el-form-item>
          </div>
          <div class="middle">
            <el-form-item label="发布日期" prop="releaseTime">
              <el-date-picker
                v-model="standardFormStore.StandardForm.releaseTime" :clearable="false" type="date"
                placeholder="选择日期" style="width: 100%"
              />
            </el-form-item>
            <el-form-item label="实施日期" prop="implementationTime">
              <el-date-picker
                v-model="standardFormStore.StandardForm.implementationTime" :clearable="false" type="date"
                placeholder="选择日期" style="width: 100%"
              />
            </el-form-item>
            <el-form-item label="归口单位" prop="administrativeDepartment">
              <el-input v-model="standardFormStore.StandardForm.administrativeDepartment" @click="handleOption('administrativeDepartment')" />
            </el-form-item>
            <el-form-item label="主管单位">
              <el-input v-model="standardFormStore.StandardForm.responsibleDepartment" @click="handleOption('responsibleDepartment')" />
            </el-form-item>
            <el-form-item label="发布单位" prop="releaseDepartment">
              <el-input v-model="standardFormStore.StandardForm.releaseDepartment" @click="handleOption('releaseDepartment')" />
            </el-form-item>
          </div>
          <div class="right">
            <el-form-item label="标准状态" prop="state">
              <el-select v-model="standardFormStore.StandardForm.state" placeholder="请选择标准的状态">
                <el-option
                  v-for="row of standardStore.stateLists" :key="row.mName" :label="row.mName"
                  :value="row.requestKey"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="标准性质" prop="property">
              <el-select v-model="standardFormStore.StandardForm.property" placeholder="请选择标准的性质">
                <el-option
                  v-for="row of standardStore.propertyLists" :key="row.mName" :label="row.mName"
                  :value="row.requestKey"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="标准类型" prop="standardType">
              <el-select v-model="standardFormStore.StandardForm.standardType" placeholder="请选择标准的类型">
                <el-option
                  v-for="row of standardStore.typeLists" :key="row.mName" :label="row.mName"
                  :value="row.requestKey"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="行业分类" prop="industryClassfication">
              <el-input v-model="standardFormStore.StandardForm.industryClassfication" @click="handleOption('industryClassfication')" />
            </el-form-item>
            <el-form-item label="ICS分类" prop="ICSClassfication">
              <el-input v-model="standardFormStore.StandardForm.ICSClassfication" @click="handleOption('ICSClassfication')" />
            </el-form-item>
          </div>
        </div>
        <div class="bottomForm" flex justify-start items-start>
          <el-form-item label="区域/地方" prop="city">
            <el-select v-model="standardFormStore.StandardForm.city" placeholder="请选择区域">
              <el-option
                v-for="row of standardStore.cites" :key="row.cityCode" :label="row.cityName"
                :value="row.cityCode"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="备注" flex-1>
            <el-input v-model="standardFormStore.StandardForm.comment" type="textarea" />
          </el-form-item>
        </div>
      </el-form>
      <div class="submitContainer" justify-center flex flex-col>
        <el-button inline-block right-0 color-black type="success" @click="onSubmit(ruleFormRef)">
          submit
        </el-button>
        <!-- <el-upload
          ref="upload" :data="{ ...standardFormStore.StandardForm }" mt-2 self-center class="upload"
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
        </el-upload> -->
      </div>
    </div>
    <optionDialog />
  </main>
</template>

<style scoped>
</style>

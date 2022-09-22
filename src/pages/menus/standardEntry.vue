<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { genFileId } from 'element-plus'
import type { FormInstance, FormRules, UploadInstance, UploadProps, UploadRawFile } from 'element-plus'

import { $submit } from '~/composables/http'
import { useStandardFormStore } from '~/stores/standard/standardForm'
import { useStandardStore } from '~/stores/standard'
import { useOptionStore } from '~/stores/standard/subOption'
import { useOptionNameStore } from '~/stores/standard/optionName'
const upload = ref<UploadInstance>()
const standardFormStore = useStandardFormStore()
const standardStore = useStandardStore()
const optionStore = useOptionStore()
const optionNameStore = useOptionNameStore()

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
const checkId = function (rule: any, value: any, callback: any) {
  if (value === '')
    callback(new Error('不能为空'))

  if (value.match(/^[A-Z\/\.\-]+ [0-9]+$/)) { callback() }
  else {
    if (value.match(/[^A-Z\/\.\-0-9]/))
      callback(new Error('只能输入大写字母、数字、/、.、-'))
    else
      callback(new Error('格式错误'))
  }
}

const ruleFormRef = ref<FormInstance>()
const standardRules = reactive<FormRules>({
  id: [
    { validator: checkId, trigger: 'blur' },
  ],
  chName: [
    { required: optionNameStore.chName.isShow, message: '不能为空', trigger: 'blur' },
  ],
  releaseTime: [
    { required: optionNameStore.releaseTime.isShow, message: '不能为空', trigger: 'blur' },
  ],
  implementationTime: [
    { required: optionNameStore.implementationTime.isShow, message: '不能为空', trigger: 'blur' },
  ],
  state: [
    { required: optionNameStore.state.isShow, message: '不能为空', trigger: 'change' },
  ],
  property: [
    { required: optionNameStore.property.isShow, message: '不能为空', trigger: 'change' },
  ],
  sort: [
    { required: optionNameStore.sort.isShow, message: '不能为空', trigger: 'change' },
  ],
  city: [
    { required: true, message: '不能为空', trigger: 'change' },
  ],
  administrativeDepartment: [
    { required: optionNameStore.administrativeDepartment.isShow, message: '不能为空', trigger: 'blur' },
  ],
  responsibleDepartment: [
    { required: optionNameStore.responsibleDepartment.isShow, message: '不能为空', trigger: 'blur' },
  ],
  industryClassfication: [
    { required: true, message: '不能为空', trigger: 'blur' },
  ],
  ICSClassfication: [
    { required: true, message: '不能为空', trigger: 'blur' },
  ],

})
</script>

<template>
  <main flex justify-center items-start pt5>
    <div class="container">
      <el-form ref="ruleFormRef" :rules="standardRules" status-icon size="large" :model="standardFormStore.StandardForm" label-width="10rem">
        <div class="topForm" flex justify-center items-center>
          <el-radio-group v-model="standardFormStore.StandardForm.standardType">
            <el-radio-button label="国家标准" size="large" />
            <el-radio-button label="行业标准" size="large" />
            <el-radio-button label="地方标准" size="large" />
            <el-radio-button label="团体标准" size="large" />
            <el-radio-button label="国际标准" size="large" />
            <el-radio-button label="企业标准" size="large" />
          </el-radio-group>
        </div>
        <div class="inlineContainer" m6 flex justify-center items-start>
          <div class="left">
            <el-form-item required :label="optionNameStore.id.name" prop="id">
              <el-input v-model="standardFormStore.StandardForm.id" />
            </el-form-item>
            <el-form-item v-if="optionNameStore.state.isShow" :label="optionNameStore.state.name" prop="state">
              <el-select v-model="standardFormStore.StandardForm.state" placeholder="请选择标准的状态">
                <el-option
                  v-for="row of standardStore.stateLists" :key="row.mName" :label="row.mName"
                  :value="row.requestKey"
                />
              </el-select>
            </el-form-item>
            <el-form-item v-if="optionNameStore.property.isShow" :label="optionNameStore.property.name" prop="property">
              <el-select v-model="standardFormStore.StandardForm.property" placeholder="请选择标准的性质">
                <el-option
                  v-for="row of standardStore.propertyLists" :key="row.mName" :label="row.mName"
                  :value="row.requestKey"
                />
              </el-select>
            </el-form-item>
            <el-form-item v-if="optionNameStore.sort.isShow" :label="optionNameStore.sort.name" prop="sort">
              <el-select v-model="standardFormStore.StandardForm.sort" placeholder="请选择标准的性质">
                <el-option
                  v-for="row of standardStore.sortLists" :key="row.mName" :label="row.mName"
                  :value="row.requestKey"
                />
              </el-select>
            </el-form-item>
            <el-form-item :label="optionNameStore.releaseTime.name" prop="releaseTime">
              <el-date-picker
                v-model="standardFormStore.StandardForm.releaseTime" :clearable="false" type="date"
                placeholder="选择日期" style="width: 100%"
              />
            </el-form-item>
            <el-form-item :label="optionNameStore.implementationTime.name" prop="implementationTime">
              <el-date-picker
                v-model="standardFormStore.StandardForm.implementationTime" :clearable="false" type="date"
                placeholder="选择日期" style="width: 100%"
              />
            </el-form-item>
          </div>
          <div class="middle">
            <el-form-item v-if="optionNameStore.chName.isShow" :label="optionNameStore.chName.name" prop="chName">
              <el-input v-model="standardFormStore.StandardForm.chName" />
            </el-form-item>
            <el-form-item :label="optionNameStore.enName.name" prop="enName">
              <el-input v-model="standardFormStore.StandardForm.enName" />
            </el-form-item>
            <el-form-item v-if="optionNameStore.CCS.isShow" :label="optionNameStore.CCS.name">
              <el-input v-model="standardFormStore.StandardForm.CCS" />
            </el-form-item>
            <el-form-item v-if="optionNameStore.ICS.isShow" :label="optionNameStore.ICS.name">
              <el-input v-model="standardFormStore.StandardForm.ICS" />
            </el-form-item>
            <el-form-item v-if="optionNameStore.administrativeDepartment.isShow" :label="optionNameStore.administrativeDepartment.name" prop="administrativeDepartment">
              <el-input v-model="standardFormStore.StandardForm.administrativeDepartment">
                <template #prepend>
                  <span cursor-pointer @click="handleOption('administrativeDepartment')">Pick</span>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item v-if="optionNameStore.responsibleDepartment.isShow" :label="optionNameStore.responsibleDepartment.name" prop="responsibleDepartment">
              <el-input v-model="standardFormStore.StandardForm.responsibleDepartment">
                <template #prepend>
                  <span cursor-pointer @click="handleOption('responsibleDepartment')">Pick</span>
                </template>
              </el-input>
            </el-form-item>
          </div>
          <div class="right">
            <el-form-item v-if="optionNameStore.replaceStandard.isShow" :label="optionNameStore.replaceStandard.name" prop="replaceStandard">
              <el-input v-model="standardFormStore.StandardForm.replaceStandard">
                <template #prepend>
                  <span cursor-pointer @click="handleOption('replaceStandard')">Pick</span>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item v-if="optionNameStore.city.isShow" :label="optionNameStore.city.name" prop="city">
              <el-select v-model="standardFormStore.StandardForm.city" placeholder="请选择区域">
                <el-option
                  v-for="row of standardStore.cites" :key="row.cityCode" :label="row.cityName"
                  :value="row.cityCode"
                />
              </el-select>
            </el-form-item>
            <el-form-item v-if="optionNameStore.industryClassfication.isShow" :label="optionNameStore.industryClassfication.name" prop="industryClassfication">
              <el-input v-model="standardFormStore.StandardForm.industryClassfication">
                <template #prepend>
                  <span cursor-pointer @click="handleOption('industryClassfication')">Pick</span>
                </template>
              </el-input>
            </el-form-item>
          </div>
        </div>
        <div class="bottomForm" flex justify-start items-start>
          <el-form-item label="备注" flex-1 mr8>
            <el-input v-model="standardFormStore.StandardForm.comment" type="textarea" />
          </el-form-item>
        </div>
      </el-form>
      <div class="submitContainer" justify-center flex flex-col>
        <el-button inline-block right-0 color-black type="success" @click="onSubmit(ruleFormRef)">
          submit
        </el-button>
      </div>
    </div>
    <optionDialog />
  </main>
</template>

<style scoped>
.el-form-item__error{
    width:12rem;
}
</style>

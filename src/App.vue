<template>
  <header mb-2>
    <div class="connection" h-5 flex items-center justify-end>
      <div inline-flex i-carbon-phone-voice-filled></div>
      <div inline-flex>联系方式</div>
    </div>
    <nav flex justify-start items-center>
      <div flex-1>
        <img h-20 inline-flex src="https://raw.githubusercontent.com/ThawingX/images/master/logo.png" alt="新黄浦中医联创院" />
      </div>
      <div m-4 inline-flex justify-center text-center items-center flex-wrap flex-col class='title'>
        <div class="chTitle" text-xl>中医药装备标准与检验检测重点实验室</div>
        <div class="enTitle">Key Lab of Traditional Chinese Medicine Devices for Standards and Inspection</div>
      </div>
      <div class="spacer" flex-1></div>
    </nav>
  </header>
  <main flex justify-center items-center>
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
      <el-upload mt-2 self-center ref="upload" class='upload' action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        :limit="1" :on-exceed="handleExceed" :auto-upload="false">
        <template #trigger>
          <el-button color-black type="primary">选择源标准</el-button>
        </template>
        <el-button color-black class="ml-3" type="success" @click="submitUpload">
          上传
        </el-button>
        <template #tip>
          <div class="el-upload__tip text-red">
            最少选择一个标准文件
          </div>
        </template>
      </el-upload>
      <el-button inline-block right-0 color-black type="success" @click="onSubmit()">submit</el-button>
    </div>
    </div>
    
  </main>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { genFileId } from 'element-plus'
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'

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
const form = reactive({
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
  type: ''
})

const onSubmit = () => {
  console.log(form)
}
</script>
<style scoped>
.connection {
  background-color: var(--bg-blue);
}

nav {
  background-color: var(--bg-white);
}

.chTitle {
  color: var(--font-blue-deep);
  font-weight: 700;
}

.enTitle {
  color: var(--font-blue);
  font-weight: 500;
}

.title {
  flex: 2 1 0%;
}

.submitContainer{
  border-top:1px solid var(--font-blue-deep)
}
</style>
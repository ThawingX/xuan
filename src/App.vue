<template>
  <header mb-2>
    <nav flex justify-between bg-gray>
      <img h-20 inline-flex src="logo.jpg" alt="">
      <div m-4 inline-flex justify-center flex-wrap>
        <div>中医药装备标准与检验检测重点实验室</div>
        <div>Key Lab of Traditional Chinese Medicine Devices for Standards and Inspection</div>
      </div>
    </nav>
  </header>
  <main>
    <el-form inline :model="form" label-width="120px">
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
    <div >
      <el-button inline-block right-0 color-black type="success" @click="onSubmit()">submit</el-button>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

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

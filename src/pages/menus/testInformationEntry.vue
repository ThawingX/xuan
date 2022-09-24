<script lang="ts" setup>
import axios from 'axios'
import { ElNotification } from 'element-plus'
import { useDetectItemStore } from '~/stores/detectItem'
import { $getStandard } from '~/composables/http'
const detectItemStore = useDetectItemStore()
const handleClick = function () {
}
const addDetectItem = function () {
  detectItemStore.isShowAddDetectItem = true
  console.log(detectItemStore.detectItem)
}
const getStandardName = function (e: Event) {
  const id = e.target.value
  if (!id)
    return alert('输入错误')

  const config = {
    method: 'get',
    url: `http://119.3.243.150:3399/standard?id=${id}`,
    headers: {},
  }
  axios(config).then((response) => {
    detectItemStore.detectItem.chName = response.data.chName || '未找到'
    detectItemStore.detectItem.enName = response.data.enName || '未找到'
  }).catch((error) => {
    console.log(error)
  })
}

const getDetectItem = async function (e: Event) {
  const res = await getStandardName(e)
  const config = {
    method: 'get',
    url: `http://119.3.243.150:3399/detectItem?id=${detectItemStore.detectItem.standardId}`,
    headers: {},
  }
  axios(config).then((response) => {
    detectItemStore.detectItemList = response.data.detectItem
  }).catch((error) => {
    console.log(error)
  })
}

const openSearchDialog = async function () {
  detectItemStore.isShowSerchDialog = true
  const { data } = await $getStandard(10)
  const { code, message, result } = data
  if (code === 1) {
    detectItemStore.standardList = result
    ElNotification({
      title: '成功',
      message,
      type: 'success',
    })
  }
  else {
    ElNotification({
      title: '失败',
      message,
      type: 'error',
    })
  }
}
</script>

<template>
  <div class="container" flex justify-start items-center flex-col>
    <div class="searchContainer" flex justify-center items-center gap-8 self-start>
      <el-button type="primary" @click="addDetectItem">
        添加
      </el-button>
      <el-button type="primary" @click="openSearchDialog">
        查找
      </el-button>
      <el-input v-model="detectItemStore.detectItem.standardId" label="标准号" :clearable="true" placeholder="请输入标准号" @keyup.enter="getDetectItem($event)" />
      <el-input v-model="detectItemStore.detectItem.chName" label="中文标准名称" :disabled="true" placeholder="" />
      <el-input v-model="detectItemStore.detectItem.enName" label="英文标准名称" :disabled="true" placeholder="" />
    </div>
    <el-table border :data="detectItemStore.detectItemList" style="width: 100%;">
      <!--  标准id  查找 -->

      <el-table-column type="index" label="序号" width="60" />
      <el-table-column prop="detectItem" label="检测项" width="100" />
      <el-table-column prop="requirement" label="结果要求" width="100" />
      <el-table-column prop="detectMethodId" label="检测方法序号" width="120" />
      <el-table-column prop="detectMethod" label="检测方法名称" width="120" />
      <el-table-column prop="equipment" label="仪器设备" width="100" />
      <el-table-column prop="equipmentRequirement" label="设备要求" width="100" />
      <el-table-column prop="description" label="方法描述" width="120" />
      <el-table-column fixed="right" label="操作" width="80">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="handleClick(scope.row)">
            edit
          </el-button>
          <el-button link type="primary" size="small" @click="handleClick(scope.row)">
            delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <addDetectItemDialog />
    <searchDetectItemDialog />
  </div>
</template>

<style>

</style>

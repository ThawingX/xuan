<script lang="ts" setup>
import axios from 'axios'
import { useDetectItemStore } from '~/stores/detectItem'
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

const search = function () {
  alert('存在问题，暂时无法使用')
}
</script>

<template>
  <div class="container" flex justify-start items-center flex-col>
    <div class="searchContainer" flex justify-center items-center gap-8 self-start>
      <el-button type="primary" @click="addDetectItem">
        添加
      </el-button>
      <el-button type="primary" @click="search">
        查找
      </el-button>
      <el-input v-model="detectItemStore.detectItem.standardId" label="标准号" :clearable="true" placeholder="请输入标准号" @keyup.enter="getDetectItem($event)" />
      <el-input v-model="detectItemStore.detectItem.chName" label="中文标准名称" :disabled="true" placeholder="" />
      <el-input v-model="detectItemStore.detectItem.enName" label="英文标准名称" :disabled="true" placeholder="" />
    </div>
    <el-table :data="detectItemStore.detectItemList" style="width: 100%">
      <!--  标准id  查找 -->

      <el-table-column prop="id" label="序号" />
      <el-table-column prop="detectItem" label="检测项" />
      <el-table-column prop="requirement" label="结果要求" />
      <el-table-column prop="detectMethodId" label="检测方法序号" />
      <el-table-column prop="detectMethod" label="检测方法名称" />
      <el-table-column prop="equipment" label="仪器设备" />
      <el-table-column prop="equipmentRequirement" label="设备要求" />
      <el-table-column fixed="right" label="操作" width="120">
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
  </div>
</template>

<style scoped>

</style>

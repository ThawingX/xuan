<script lang="ts" setup>
import axios from 'axios'
import { useDetectItemStore } from '~/stores/detectItem'
const detectItemStore = useDetectItemStore()
const getDetectItem = async function (e: Event) {
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
const addBtn = async function () {
  const config = {
    method: 'post',
    url: 'http://119.3.243.150:3399/detectItem',
    Headers: {
      'Content-Type': 'application/json',
    },
    data: detectItemStore.detectItem,
  }
  axios(config).then((res) => {
    console.log(res)
    if (res.data === 'invalid request')
      return alert('请检查是否输入了标准号')
  }).catch((err) => {
    console.warn(err)
  })
  await getDetectItem()
  detectItemStore.isShowAddDetectItem = false
}
</script>

<template>
  <el-dialog
    v-model="detectItemStore.isShowAddDetectItem"
    title="检测项添加"
    width="50%"
    :draggable="true"
    :close-on-click-modal="false"
  >
    <el-form :model="detectItemStore.detectItem" label-width="10rem">
      <el-form-item label="序号">
        <el-input v-model="detectItemStore.detectItem.detectItemId " />
      </el-form-item>
      <el-form-item label="检测项">
        <el-input v-model="detectItemStore.detectItem.detectItem " />
      </el-form-item>
      <el-form-item label="结果要求">
        <el-input v-model="detectItemStore.detectItem.requirement " />
      </el-form-item>
      <el-form-item label="检测方法序号">
        <el-input v-model="detectItemStore.detectItem.detectMethodId " />
      </el-form-item>
      <el-form-item label="检测方法">
        <el-input v-model="detectItemStore.detectItem.detectMethod " />
      </el-form-item>
      <el-form-item label="仪器设备">
        <el-input v-model="detectItemStore.detectItem.equipment " />
      </el-form-item>
      <el-form-item label="设备要求">
        <el-input v-model="detectItemStore.detectItem.equipmentRequirement " />
      </el-form-item>
    </el-form>
    <!-- 确定按钮 -->
    <div class="bottom">
      <el-button type="primary" @click="addBtn()">
        确定
      </el-button>
    </div>
  </el-dialog>
</template>

<style scoped>

</style>

<script lang="ts" setup>
import { useDetectItemStore } from '~/stores/detectItem'
const detectItemStore = useDetectItemStore()
const changeSelect = function (currentRow: any, oldCurrentRow: any) {
  console.log(currentRow)
  console.log(oldCurrentRow)
}
const handle = function () {
  console.log(detectItemStore.standardList)
}
</script>

<template>
  <el-dialog
    v-model="detectItemStore.isShowSerchDialog"
    title="查找标准"
    width="60%"
    :draggable="true"
    :close-on-click-modal="false"
  >
    <el-input placeholder="search" @focus="handle" />
    <el-table :data="detectItemStore.standardList" height="50vh" style="width:100%" :highlight-current-row="true" @current-change="changeSelect">
      <el-table-column prop="id" label="标准号" />
      <el-table-column prop="chName" label="标准名称" />
      <el-table-column prop="enName" label="英文标准名称" />
      <el-table-column prop="releaseTime" sortable label="发布时间" />
    </el-table>
    <el-button>确定</el-button>
  </el-dialog>
</template>

<style scoped>

</style>

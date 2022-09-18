<script lang="ts" setup>
import { Check, Delete } from '@element-plus/icons-vue'
import axios from 'axios'
import { ElMessageBox } from 'element-plus'
import { useStandardFormStore } from '~/stores/standard/standardForm'
import { useOptionStore } from '~/stores/standard/subOption'
const standardFormStore = useStandardFormStore()
const optionStore = useOptionStore()
const handleClose = function (done: () => void) {
  ElMessageBox.confirm('确定关闭吗?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
const handleSeach = function () {
  alert('search')
}
const getOptionLIst = function () {
  const config = {
    method: 'get',
    url: `http://119.3.243.150:3399/option/list?optionName=${optionStore.subOption.optionName}`,
    headers: { },
  }
  axios(config)
    .then((res) => {
      optionStore.optionList = res.data
    })
    .catch((err) => {
      console.warn(err)
    })
}
const deleteSubOption = async function (row: any) {
  const config = {
    method: 'delete',
    url: 'http://119.3.243.150:3399/option',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      optionName: optionStore.subOption.optionName,
      subOptionName: row.subOptionName,
    }),
  }
  axios(config)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.warn(err)
    })
  await getOptionLIst()
}
const clickSubOption = function (row: any) {
  standardFormStore.StandardForm[optionStore.subOption.optionName] = row.subOptionName
  standardFormStore.isShowOptionDialog = false
}
const showAddOptionDialog = function () {
  standardFormStore.isShowAddOptionDialog = true
}

const closeOptionDialog = function () {
  standardFormStore.isShowOptionDialog = false
}
const getTitle = function (val: String) {
  const list = {
    ICSClassfication: 'ICS分类',
    industryClassfication: '行业分类',
    releaseDepartment: '发布单位',
    responsibleDepartment: '主管单位',
    administrativeDepartment: '归口单位',
    replaceStandard: '替代标准',
  }
  return list[val] || val
}
</script>

<template>
  <el-dialog
    v-model="standardFormStore.isShowOptionDialog"
    :title="getTitle(optionStore.subOption.optionName)"
    width="50%"
    :before-close="handleClose"
    :draggable="true"
    :close-on-click-modal="false"
    :show-close="false"
    @open="getOptionLIst"
  >
    <!--  table显示，内含删除按钮 -->
    <div class="tableContainer">
      <el-table height="250" :stripe="true" :data="optionStore.optionList" style="width: 100%">
        <el-table-column prop="subOptionName" label="子项名称" />
        <el-table-column prop="commiter" label="创建人" />
        <el-table-column fixed="right" label="操作">
          <template #default="scope">
            <el-button type="danger" size="small" :icon="Delete" circle @click="deleteSubOption(scope.row)" />
            <el-button type="success" size="small" :icon="Check" circle @click="clickSubOption(scope.row)" />
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--  添加 和 确定按钮 -->
    <div class="bottom">
      <el-button type="primary" @click="closeOptionDialog()">
        关闭
      </el-button>
      <el-button type="warning" @click="showAddOptionDialog">
        添加
      </el-button>
    </div>
  </el-dialog>
  <addOptionDialog />
</template>

<style scoped>
.bottom{
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
</style>

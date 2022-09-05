<script lang="ts" setup>
import { Delete } from '@element-plus/icons-vue'
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
const handleOpen = function () {
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
const deleteSubOption = function (row: any) {
  console.log(optionStore.subOption)
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
}

const addSubOption = function () {
  const config = {
    method: 'post',
    url: 'http://119.3.243.150:3399/option',
    headers: { },
  }
  axios(config)
    .then((res) => {
    })
    .catch((err) => {
      console.warn(err)
    })
}
const addOptionToForm = function () {

}
</script>

<template>
  <el-dialog
    v-model="standardFormStore.isShowOptionDialog"
    title="录入项"
    width="50%"
    :before-close="handleClose"
    :draggable="true"
    :close-on-click-modal="false"
    @open="handleOpen"
  >
    <!--  标准id  查找 -->
    <div class="searchContainer" flex justify-center items-center gap-8>
      <el-button type="primary" @click="handleSeach">
        查找
      </el-button>
      <el-input v-model="optionStore.subOption.id" label="标准号" :clearable="true" placeholder="请输入标准号" />
      <el-input label="中文标准名称" :disabled="true" placeholder="中文标准名称" />
      <el-input label="英文标准名称" :disabled="true" placeholder="英文标准名称" />
    </div>
    <!--  table显示，内含删除按钮 -->
    <div class="tableContainer">
      <el-table height="250" :stripe="true" :data="optionStore.optionList" style="width: 100%">
        <el-table-column prop="subOptionName" label="子项名称" />
        <el-table-column prop="commiter" label="创建人" />
        <el-table-column fixed="right" label="操作">
          <template #default="scope">
            <el-button type="danger" size="small" :icon="Delete" circle @click="deleteSubOption(scope)" />
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--  添加 和 确定按钮 -->
    <div class="bottom">
      <el-button type="warning" @click="addSubOption()">
        添加
      </el-button>
      <el-button type="primary" @click="addOptionToForm()">
        确定
      </el-button>
    </div>
  </el-dialog>
</template>

<style scoped>

</style>

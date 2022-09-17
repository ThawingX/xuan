<script lang="ts" setup>
import axios from 'axios'
import { useStandardFormStore } from '~/stores/standard/standardForm'
import { useOptionStore } from '~/stores/standard/subOption'
const standardFormStore = useStandardFormStore()
const optionStore = useOptionStore()
const addSubOption = function () {
  const config = {
    method: 'post',
    url: 'http://119.3.243.150:3399/option',
    headers: { },
    data: {
      optionName: optionStore.subOption.optionName,
      subOptionName: optionStore.subOption.subOptionName,
      commiter: 'optionStore.subOption.commiter',
    },
  }
  return new Promise((resolve, reject) => {
    axios(config)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        console.warn(err)
        reject(err)
      })
  })
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

const addBtn = async function () {
  const res = await addSubOption()
  const res2 = await handleOpen()
  standardFormStore.isShowAddOptionDialog = false
}
const close = function () {
  standardFormStore.isShowAddOptionDialog = false
}
</script>

<template>
  <el-dialog
    v-model="standardFormStore.isShowAddOptionDialog"
    title="添加子项"
    width="30%"
    :draggable="true"
    :close-on-click-modal="false"
    :show-close="false"
  >
    <el-input v-model="optionStore.subOption.subOptionName " />
    <!-- 确定按钮 -->
    <div class="bottom">
      <el-button type="primary" @click="close()">
        取消
      </el-button>
      <el-button type="warning" @click="addBtn()">
        确定
      </el-button>
    </div>
  </el-dialog>
</template>

<style scoped>
.bottom{
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
</style>

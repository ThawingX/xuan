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
  axios(config)
    .then((res) => {
    })
    .catch((err) => {
      console.warn(err)
    })
}
const addSuboption = function () {
  addSubOption()
  standardFormStore.isShowAddOptionDialog = false
}
</script>

<template>
  <el-dialog
    v-model="standardFormStore.isShowAddOptionDialog"
    title="子项名称"
    width="30%"
    :draggable="true"
    :close-on-click-modal="false"
  >
    <el-input v-model="optionStore.subOption.subOptionName " />
    <!--  添加 和 确定按钮 -->
    <div class="bottom">
      <el-button type="primary" @click="addSuboption()">
        确定
      </el-button>
    </div>
  </el-dialog>
</template>

<style scoped>

</style>

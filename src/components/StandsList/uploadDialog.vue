<script lang="ts" setup>
import { useStandardFormStore } from '~/stores/standard/standardForm'
import { useOptionStore } from '~/stores/standard/subOption'
const standardFormStore = useStandardFormStore()
const optionStore = useOptionStore()
const close = function () {
  standardFormStore.isShowAddOptionDialog = false
}
</script>

<template>
  <el-dialog
    v-model="standardFormStore.isShowAddOptionDialog"
    title="上传文件"
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

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import type { VNode, VNodeProps } from 'vue'
import { useRelationalStandardStore } from '~/stores/standard/relationalStandard'
import { useStandardStore } from '~/stores/standard'
import { $getStandard } from '~/composables/http'
const relationalStandardStore = useRelationalStandardStore()
const standardStore = useStandardStore()
interface Option {
  key: number
  label: string
  disabled: boolean
}

const rightValue = ref([1])
const leftValue = ref([1])

const renderFunc = (
  h: (type: string, props: VNodeProps | null, children?: string) => VNode,
  option: Option,
) => {
  return h('span', null, option.label)
}

const handleClose = function () {
  relationalStandardStore.isShowRelationalStandardDialog = false
}
const getStandardList = async function () {
  standardStore.standardLists = []
  const res = await $getStandard()
  // 判断
  standardStore.standardLists = res.data.data
}
const addRelationalStandard = async function () {
  console.log(rightValue.value)
}
onMounted(async () => {
  await getStandardList()
})
</script>

<template>
  <el-dialog
    v-model="relationalStandardStore.isShowRelationalStandardDialog"
    title="添加关联标准"
    width="100%"
    :before-close="handleClose"
  >
    <div style="text-align: center">
      <el-transfer
        v-model="rightValue"
        style="text-align: left; display: inline-block"
        filterable
        :titles="['标准列表', '预关联的标准']"
        :button-texts="['移出', '移入']"
        :format="{
          noChecked: '${total}',
          hasChecked: '${checked}/${total}',
        }"
        :props="{
          key: 'id',
          label: 'chName',
        }"
        :data="standardStore.standardLists"
      >
        <template #default="{ option }">
          <span>{{ option.id }} - {{ option.chName || option.enName }}</span>
        </template>
        <template #left-footer>
          <el-button class="transfer-footer" size="small" @click="getStandardList()">
            刷新
          </el-button>
        </template>
        <template #right-footer>
          <el-button class="transfer-footer" size="small" @click="addRelationalStandard()">
            关联
          </el-button>
        </template>
      </el-transfer>
    </div>
  </el-dialog>
</template>

<style>
.transfer-footer {
  margin-left: 15px;
  padding: 6px 5px;
}
</style>

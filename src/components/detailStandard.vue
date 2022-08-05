<template>
  <el-descriptions :border="true">
    <el-descriptions-item label="标准号">{{ info.key }}</el-descriptions-item>
    <el-descriptions-item label="中文标准名称">{{ info.chName }}</el-descriptions-item>
    <el-descriptions-item label="英文标准名称">{{ info.enName }}</el-descriptions-item>
    <el-descriptions-item label="标准状态">{{ info.state }}</el-descriptions-item>
    <el-descriptions-item label="中国标分类号（CCS）">{{ info.CCS }}</el-descriptions-item>
    <el-descriptions-item label="国际标准分类号（ICS）">{{ info.ICS }}</el-descriptions-item>
    <el-descriptions-item label="发布日期">{{ info.pubDate }}</el-descriptions-item>
    <el-descriptions-item label="实施日期">{{ info.doDate }}</el-descriptions-item>
    <el-descriptions-item label="主管部门">{{ info.mainDepartment }}</el-descriptions-item>
    <el-descriptions-item label="归口部门">{{ info.centialDepartment }}</el-descriptions-item>
    <el-descriptions-item label="发布单位">{{ info.pubDeparment }}</el-descriptions-item>
    <el-descriptions-item label="备注">{{ info.comment }}</el-descriptions-item>
  </el-descriptions>
</template>
<script lang="ts" setup>
import { toRefs } from 'vue';
import type { Form } from '~/pages/menus/standards/types/form'
interface Props {
  info: Form
}
const props = defineProps<Props>()
const { info } = toRefs(props)
</script>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useUserStore } from '~/stores/user'
import { $allowApply, $rejectApply } from '~/composables/http/user'
const userStore = useUserStore()
const roleList = [
  { label: '管理员', value: 'admin' },
  { label: '科研人员', value: 'researcher' },
  { label: '设备管理人员', value: 'equipManager' },
  { label: '内部人员', value: 'staff' },
]

const tableRowClassName = function ({ row }) {
  if (row.type === 'apply')
    return 'warning-row'
  else if (row.type === 'recall')
    return 'success-row'
  return ''
}
const allowApply = async function (row: any) {
  const res = await $allowApply(row)
  console.log(res)
}

const rejectApply = function (row: any) {
  console.log(row)
}
onMounted(async () => {
  const res = await userStore.getAppliedList()
})
</script>

<template>
  <div class="container">
    <el-table :data="userStore.appliedList" style="width: 100%" :row-class-name="tableRowClassName">
      <el-table-column type="index" label="序号" width="60" />
      <el-table-column prop="name" label="姓名" width="120" />
      <el-table-column prop="phone" label="手机" width="120" />
      <el-table-column prop="IDNumber" label="身份证" width="120" />
      <el-table-column prop="email" label="邮箱" width="120" />
      <el-table-column prop="role" label="角色" width="120">
        <template #default="scope">
          <el-select v-model="scope.row.role" placeholder="选择该用户的角色" size="small">
            <el-option
              v-for="item in roleList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="审核" width="120">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="allowApply(scope.row)">
            通过
          </el-button>
          <el-button link type="primary" size="small" @click="rejectApply(scope.row)">
            驳回
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { ElNotification } from 'element-plus'
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
    return 'apply-row'
  else if (row.type === 'recall')
    return 'recall-row'
  return ''
}
const allowApply = async function (row: any) {
  const { data } = await $allowApply(row)
  const { code, message, result } = data
  if (code) {
    ElNotification({
      title: '成功',
      message,
      type: 'success',
    })
  }
  else {
    ElNotification({
      title: '失败',
      message,
      type: 'error',
    })
  }
  const res = await userStore.getAppliedList()
}

const rejectApply = async function (row: any) {
  const { data } = await $rejectApply(row)
  const { code, message, result } = data
  if (code) {
    ElNotification({
      title: '成功',
      message,
      type: 'success',
    })
  }
  else {
    ElNotification({
      title: '失败',
      message,
      type: 'error',
    })
  }
  const res = await userStore.getAppliedList()
}

onMounted(async () => {
  const res = await userStore.getAppliedList()
})
</script>

<template>
  <div class="container">
    <el-table border :data="userStore.appliedList" :row-class-name="tableRowClassName" style="width: 100%">
      <el-table-column type="index" label="序号" width="60" />
      <el-table-column prop="typeName,type" label="目的" width="100">
        <template #default="scope">
          {{ scope.row.typeName || scope.row.type }}
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="80" />
      <el-table-column prop="phone" label="手机" width="120" />
      <el-table-column prop="IDNumber" label="身份证" width="200" />
      <el-table-column prop="email" label="邮箱" width="200" />
      <el-table-column prop="role" label="角色" width="100">
        <template #default="scope">
          <el-select v-if="scope.row.type === 'apply'" v-model="scope.row.role" placeholder="请选择" size="small">
            <el-option
              v-for="item in roleList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <div v-else>
            {{ scope.row.role }}
          </div>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="审核" width="60">
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
.el-table .apply-row {
  --el-table-tr-bg-color: var(--bg-blue);
}
.el-table .recall-row {
  --el-table-tr-bg-color: var(--bg-gray);
}
</style>

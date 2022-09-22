<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { ElNotification } from 'element-plus'
import { useUserStore } from '~/stores/user'
import { useMainStore } from '~/stores'
const userStore = useUserStore()
const mainStore = useMainStore()
const tableRowClassName = function ({ row }) {
  const transformRoleToClass = {
    admin: 'red',
    researcher: 'blue',
    equipmentManager: 'green',
    staff: 'gray',
  }
  return transformRoleToClass[row.role]
}

onMounted(async () => {
  const res = await userStore.getUserList()
})

const editUser = function (row: any) {
  ElNotification({
    title: '提示',
    message: '功能开发中',
    type: 'warning',
  })
}

const deleteUser = function (row: any) {
  ElNotification({
    title: '提示',
    message: '功能开发中',
    type: 'warning',
  })
}
</script>

<template>
  <div class="container">
    <el-table :data="userStore.userList" style="width: 100%" :row-class-name="tableRowClassName">
      <el-table-column prop="account" label="序号" width="100" />
      <el-table-column prop="name" label="姓名" width="80" />
      <el-table-column prop="phone" label="手机" width="120" />
      <el-table-column prop="IDNumber" label="身份证" width="180" />
      <el-table-column prop="email" label="邮箱" width="200" />
      <el-table-column prop="role" label="角色" width="120">
        <template #default="scope">
          <span>{{ mainStore.getChRole(scope.row.role) }}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="60">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="editUser(scope.row)">
            编辑
          </el-button>
          <el-button link type="primary" size="small" @click="deleteUser(scope.row)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style>
/*  使用了scoped之后，属性不能暴露出去，导致样式失效 */
.el-table .red {
  --el-table-tr-bg-color: #eea2a4;
}
.el-table .blue {
  --el-table-tr-bg-color: #8bc8fe;
}
.el-table .green {
  --el-table-tr-bg-color: #bcd4d0;
}
.el-table .gray {
  --el-table-tr-bg-color: #e2e7eb;
}
</style>

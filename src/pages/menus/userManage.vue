<script lang="ts" setup>
import { onMounted } from 'vue'
import { useUserStore } from '~/stores/user'
const userStore = useUserStore()
const allowApply = function (row: any) {
  console.log(row)
}

const rejectApply = function (row: any) {
  console.log(row)
}
onMounted(async () => {
  const res = await userStore.getAppliedList()
  console.log(res)
})
</script>

<template>
  <div class="container">
    <el-table :data="userStore.appliedList" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="120" />
      <el-table-column prop="phone" label="手机" width="120" />
      <el-table-column prop="IDNumber" label="身份证" width="120" />
      <el-table-column prop="email" label="邮箱" width="600" />
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

<style scoped></style>

<script setup lang="ts">
import { usePaginationStore } from '~/stores/standard/Pagination'
const paginationStore = usePaginationStore()
const handleCurrentChange = function (currPage: any) {
  paginationStore.currPage = currPage
}
</script>

<template>
  <el-pagination
    layout="prev, pager, next" :current-page="paginationStore.currPage"
    :default-current-page="paginationStore.defaultCurrentPage" :total="paginationStore.total"
    :page-size="paginationStore.pageSize" @current-change="handleCurrentChange"
  />
</template>

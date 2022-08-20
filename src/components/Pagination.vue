<script setup lang="ts">
import { usePaginationStore } from '~/stores/utils/Pagination'
const paginationStore = usePaginationStore()
</script>

<template>
  <el-pagination layout="prev, pager, next" :current-page="paginationStore.currPage" :default-current-page="paginationStore.defaultCurrentPage" :total="paginationStore.total" :page-size="paginationStore.pageSize" />
</template>

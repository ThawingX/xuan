import { defineStore } from 'pinia'
export const usePaginationStore = defineStore('Pagination', {
  state: () => {
    return {
      currPage: 1,
      defaultCurrentPage: 1,
      total: 50,
      pageSize: 10,
    }
  },
  getters: {
  },
  actions: {
  },
})

<script setup lang='ts'>
import { useRouter } from 'vue-router'
import { useStandardStore } from '~/stores/standard'
import { usePaginationStore } from '~/stores/standard/Pagination'
const paginationStore = usePaginationStore()
const router = useRouter()
const standardStore = useStandardStore()
function turnToDetail(row: any) {
  router.push({ name: 'detail', params: { ...row } })
}
</script>

<template>
  <div class="standardsList">
    <div v-for="row of standardStore.getDivideStandardLists(paginationStore.pageSize, paginationStore.currPage, paginationStore.total)" :key="row.key" class="standardItem" m2 p2 flex flex-col>
      <div class="header" flex justify-start items-baseline gap-2>
        <span class="sKey" cursor-pointer @click="turnToDetail(row)">{{ row.id }}</span>
        <span class="chName" text-sm>{{ row.chName }}</span>
      </div>
      <div class="CS" mt2 text-xs flex justify-start items-center gap-4>
        <span class="ICS" flex items-center>
          ICS:{{ row.ICS }}
        </span>
        <span class="CCS" flex items-center>
          CCS:{{ row.CCS }}
        </span>
      </div>
      <div class="department" mt-2 text-sm flex items-center>
        归口单位&nbsp
        <div inline-block text-1 color-gray>
          {{ row.centialDepartment }}
        </div>
      </div>
      <div class="timeGroup" flex items-center justify-end gap-4 text-xs>
        <div flex items-center>
          <div inline-block i-carbon-upload />
          发布于&nbsp
          <div inline-block text-1 color-gray>
            {{ row.pubDate }}
          </div>
        </div>
        <div flex items-center>
          <div inline-block i-carbon-upload />
          实施于&nbsp
          <div inline-block text-1 color-gray>
            {{ row.doDate }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sKey {
  color: var(--font-blue)
}

.chName {
  color: var(--font-blue-shallow)
}

.standardItem {
  box-shadow: 0 0 5px inset var(--border-gray)
}
</style>

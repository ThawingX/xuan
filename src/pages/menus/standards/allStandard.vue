<script setup lang='ts'>
import type { Form } from './types/form';
import { useRouter } from 'vue-router';
import { onMounted, reactive } from 'vue'
import axios from 'axios'
const router = useRouter()
const config = {
  method: 'post',
  url: 'http://119.3.243.150:3300/getList',
  headers: {},
}
let standardsList: Form[] = reactive([])

function turnToDetail(row: any) {
  router.push({ name: 'detail', params: { ...row } })
}

onMounted(async () => {
  const res = await axios(config)
  standardsList.push(...res.data.data)
})
</script>
<template>
  <div class="standardsList">
    <div class="standardItem" m2 p2 v-for="row of standardsList" flex flex-col>
      <div class="header" flex justify-start items-baseline gap-2>
        <span class="sKey" cursor-pointer @click="turnToDetail(row)">{{ row.key }}</span>
        <span class="chName" text-sm>{{ row.chName }}</span>
      </div>
      <div class="CS" mt2 text-xs flex justify-start items-center gap-4>
        <span class="ICS" flex items-center>
          <div inline-block i-carbon-earth></div>{{ row.ICS }}
        </span>
        <span class="CCS" flex items-center>
          <div inline-block i-carbon-hybrid-networking></div>{{ row.ICS }}
          {{ row.CCS }}
        </span>
      </div>
      <div class="department" mt-2 text-sm flex items-center>
        <div inline-block i-carbon-application-mobile></div>
        归口单位&nbsp
        <div inline-block text-1 color-gray>{{ row.centialDepartment }}</div>
      </div>
      <div class='timeGroup' flex items-center justify-end gap-4 text-xs>
        <div flex items-center>
          <div inline-block i-carbon-upload></div>
          发布于&nbsp
          <div inline-block text-1 color-gray>{{ row.pubDate }}</div>
        </div>
        <div flex items-center>
          <div inline-block i-carbon-upload></div>
          实施于&nbsp
          <div inline-block text-1 color-gray>{{ row.doDate }}</div>
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
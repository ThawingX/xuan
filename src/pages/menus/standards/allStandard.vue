<script setup lang='ts'>
import type { Form } from './types/form';
import { useRouter } from 'vue-router';
const router = useRouter()
const standardsList: Form[] = [
  {
    key: '标准号1',
    chName: '中文标准名字',
    enName: '英文标准名字',
    state: '标准状态',
    CCS: '中国标准分类号',
    ICS: '国际标准分类号',
    pubDate: '发布日期',
    doDate: '实施日期',
    mainDepartment: '主管部门',
    centialDepartment: '归口单位',
    pubDeparment: '发布单位',
    comment: '备注',
    type: '标准类型',
    url: '标准在服务器位置url'
  },
  {
    key: '标准号2',
    chName: '中文标准名字',
    enName: '英文标准名字',
    state: '标准状态',
    CCS: '中国标准分类号',
    ICS: '国际标准分类号',
    pubDate: '发布日期',
    doDate: '实施日期',
    mainDepartment: '主管部门',
    centialDepartment: '归口单位',
    pubDeparment: '发布单位',
    comment: '备注',
    type: '标准类型',
    url: '标准在服务器位置url'
  }
]

function turnToDetail(row:any) {
  router.push({ name: 'detail', params:{...row}})
}
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
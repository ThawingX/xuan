<script setup lang='ts'>
import type { Form } from './types/form';


const standardsList: Form[] = [
  {
    key: '标准号',
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
</script>
<template>
  <div class="standardsList">
    <div class="standardItem" v-for="row of standardsList" flex flex-col>
      <div class="header" flex justify-start items-baseline gap-2>
        <span class="sKey">{{ row.key }}</span>
        <span class="chName" text-sm>{{ row.chName }}</span>
      </div>
      <div class="CS" text-xs>
        <span class="ICS">
          <div inline-block i-carbon-earth></div>{{ row.ICS }}
        </span>
        <span class="CCS">
          <div inline-block i-carbon-hybrid-networking></div>{{ row.ICS }}
          {{ row.CCS }}</span>
      </div>
      <div class="department">{{ row.centialDepartment }}</div>
      <div class='timeGroup'>
        <span>{{ row.pubDate }}</span>
        <span>{{ row.doDate }}</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.standardsList {
  border: 1px solid var(--border-gray)
}

.sKey {
  color: var(--font-blue)
}

.chName {
  color: var(--font-blue-shallow)
}
</style>
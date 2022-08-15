<script setup lang='ts'>
import axios from 'axios'
import { useMainStore } from '~/stores'
const mainStore = useMainStore()
const config = {
  method: 'post',
  url: 'http://119.3.243.150:3300/checkStandard',
  headers: {},
}
async function search(e: Event) {
  const val = e.target!.value
  const res = await axios({ ...config, data: { search: val } })
  const list = res.data.data
  if (res.data.data.length === 0)
    alert('搜索为空')
  else
    mainStore.standardLists = list
}
</script>

<template>
  <div>
    <input class="search" m2 type="text" placeholder="标准号或者中文名称" @keyup.enter="search($event)"></input>
  </div>
</template>

<style scoped>
.search {
  border-radius: 1rem;
  background-color: var(--bg-blue-shallow);
  text-align: center;
  box-shadow: 0 0 5px 2px inset var(--bg-blue);
}
</style>

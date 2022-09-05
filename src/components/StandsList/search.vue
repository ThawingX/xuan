<script setup lang='ts'>
import { useMainStore } from '~/stores'
import { $search } from '~/composables/http'
const mainStore = useMainStore()

async function search(e: Event) {
  const val = e.target!.value
  const res = await $search(val)
  const list = res.data.data
  console.log(res)
  if (res.data.data.length === 0)
    alert('搜索为空')
  else
    mainStore.standardLists = list
}
</script>

<template>
  <div class="container" flex justify-center>
    <input order-3 class="search" m3 type="text" placeholder="search" @keyup.enter="search($event)">
    <img src="../../styles/assets/search.svg" alt="搜索">
    <img w6 src="../../styles/assets/verticalBar.svg" alt=" ">
  </div>
</template>

<style scoped>
.container {
  width: 100%;
}

.search {
  border-radius: 1rem;
  background-color: var(--bg-blue);
  box-shadow: 0 3px 3px var(--bg-blue);
  text-align: center;
  color: transparent;
  text-shadow:0 0 0 var(--bg-gray);
  outline: none;
  transition-duration:0.5s;
  width:50%;
  font-size:0.75rem;
  line-height:1.5rem;
}

.search::placeholder {
  color: white;
  font-size: 0.75rem;
}

.search:hover {
  box-shadow: 0 3px 5px var(--bg-blue);
  cursor: pointer;
}

.search:focus~img {
  display: none;
}

.search:focus{
  width:100%;
}
</style>

<script lang="ts" setup>
import axios from 'axios'
import type { Menu } from './types/index'
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

const lists: Menu[] = [
  {
    mName: '所有标准',
    requestKey: 'all',
  },
  {
    mName: '国家标准',
    requestKey: 'country',
  },
  {
    mName: '行业标准',
    requestKey: 'industry',
  },
  {
    mName: '地方标准',
    requestKey: 'location',
  },
  {
    mName: '团体标准',
    requestKey: 'group',
  },
  {
    mName: '国际标准',
    requestKey: 'national',
  },
  {
    mName: '企业标准',
    requestKey: 'bussiness',
  },

]
const clickMenu = async (row: any) => {
  const res = await axios({
    method: 'post',
    url: `http://119.3.243.150:3300/getList/${row.requestKey}`,
    headers: {},
  })
  mainStore.standardLists = res.data.data
}
</script>

<template>
  <div class="container" flex justify-center items-start>
    <aside flex justify-center items-center flex-col m2>
      <button v-for="row of lists" class="item" active-class="item-active" :to="row.route" @click="clickMenu(row)">
        {{ row.mName }}
      </button>
      <input class="search" m2 type="text" placeholder="标准号或者中文名称" @keyup.enter="search($event)">
    </aside>
    <main>
      <StandsList />
    </main>
  </div>
</template>

<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
}

aside {
  width: 20%;
  box-shadow: 0 0 10px var(--border-gray);
}

.search {
  border-radius: 1rem;
  background-color: var(--bg-blue-shallow);
  text-align: center;
  box-shadow: 0 0 5px 2px inset var(--bg-blue);
}

.item {
  width: 100%;
  padding: 0.5rem;
  text-align: center;
  box-shadow: 0 0 3px inset var(--border-gray)
}

.item:hover {
  box-shadow: 0 0 10px inset var(--border-gray-deep)
}

.item-active {
  box-shadow: 0 0 10px inset var(--border-gray-deep)
}

main {
  width: 80%;
}
</style>

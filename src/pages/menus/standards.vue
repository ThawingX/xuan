<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import axios from 'axios'
import type { Menu } from './types/index'
const router = useRouter()
const config = {
  method: 'post',
  url: 'http://119.3.243.150:3300/checkStandard',
  headers: {},
}
async function search(e: Event) {
  const val = e.target!.value
  const res = await axios({ ...config, data: { search: val } })
  console.log(res.data.data)
}
onMounted(() => {
  router.push('/menus/standards/allStandard')
})
const lists: Menu[] = [
  {
    mName: '所有标准',
    route: { path: '/menus/standards/allStandard' },
  },
  {
    mName: '国家标准',
    route: { path: '/menus/standards/nationalStandard' },
  },
  {
    mName: '行业标准',
    route: { path: '/menus/standards/industryStandard' },
  },
  {
    mName: '地方标准',
    route: { path: '/menus/standards/localStandard' },
  },
  {
    mName: '团体标准',
    route: { path: '/menus/standards/groupStandard' },
  },
  {
    mName: '国际标准',
    route: { path: '/menus/standards/internationalStandard' },
  },
  {
    mName: '企业标准',
    route: { path: '/menus/standards/enterpriseStandard' },
  },

]
</script>

<template>
  <div class="container" flex justify-center items-start>
    <aside flex justify-center items-center flex-col m2>
      <router-link v-for="row of lists" class="item" active-class="item-active" :to="row.route">
        {{ row.mName }}
      </router-link>
      <input class="search" m2 type="text" placeholder="标准号或者中文名称" @keyup.enter="search($event)">
    </aside>
    <main>
      <router-view m2 />
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

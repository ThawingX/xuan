<template>
  <div class="container" flex justify-center items-start>
    <aside flex justify-center items-center flex-col>
      <router-link :to="row.route" v-for="row of lists">{{ row.mName }}</router-link>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script lang="ts" setup>
import type { Menu } from './types/index';
const lists: Menu[] = [
  {
    mName: '所有标准',
    route: { path: '/menus/standards/allStandard' }
  },
  {
    mName: '国家标准',
    route: { path: '/menus/standards/nationalStandard' }
  },
  {
    mName: '行业标准',
    route: { path: '/menus/standards/industryStandard' }
  },
  {
    mName: '地方标准',
    route: { path: '/menus/standards/localStandard' }
  },
  {
    mName: '团体标准',
    route: { path: '/menus/standards/groupStandard' }
  },
  {
    mName: '国际标准',
    route: { path: '/menus/standards/internationalStandard' }
  },
  {
    mName: '企业标准',
    route: { path: '/menus/standards/enterpriseStandard' }
  }

]
</script>
<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
}

aside {
  width: 20%;
  border: 1px solid var(--border-gray)
}

main {
  width: 80%;
}
</style>
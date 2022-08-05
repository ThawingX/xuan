<template>
  <div class="container" flex justify-center items-start>
    <aside flex justify-center items-center flex-col m2>
      <router-link class='item' active-class="item-active" :to="row.route" v-for="row of lists">{{ row.mName }}</router-link>
    </aside>
    <main>
      <router-view m2></router-view>
    </main>
  </div>
</template>
<script lang="ts" setup>
import type { Menu } from './types/index';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
const router = useRouter()
onMounted(() => {
  router.push('/menus/standards/allStandard')
})
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
  box-shadow:0 0 10px var(--border-gray);
}
.item{
  width:100%;
  padding:0.5rem;
  text-align: center;
  box-shadow:0 0 3px inset var(--border-gray)
}
.item:hover{
  box-shadow:0 0 10px inset var(--border-gray-deep)
}

.item-active{
  box-shadow:0 0 10px inset var(--border-gray-deep)
}


main {
  width: 80%;
}
</style>
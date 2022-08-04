<template>
  <div class="container" flex justify-center items-center>
    <aside>
      <div v-for="row of lists">{{ row.sName }}</div>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script lang="ts" setup>
const lists = [
  {
    sName: '所有标准',
  },
  {
    sName: '国家标准',
  },
  {
    sName: '行业标准',
  },
  {
    sName: '地方标准',
  },
  {
    sName: '团体标准',
  },
  {
    sName: '国际标准',
  },
  {
    sName: '企业标准',
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
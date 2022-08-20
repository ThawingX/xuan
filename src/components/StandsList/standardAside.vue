<script setup lang='ts'>
import { useStandardStore } from '~/stores/standard'

import { $getStandard } from '~/composables/http'

const standardStore = useStandardStore()

const clickMenu = async (row: any) => {
  const res = await $getStandard(row.requestKey)
  standardStore.standardLists = res.data.data
}
</script>

<template>
  <aside flex justify-center items-center flex-col>
    <button
      v-for="row of standardStore.typeLists" :key="row.mName" class="item" :to="row.route"
      @click="clickMenu(row)"
    >
      {{ row.mName }}
    </button>
  </aside>
</template>

<style scoped>
aside {
  width: 20%;
  flex: 1 1 0;
  margin: 1rem;
}

.item {
  width: 100%;
  padding: 0.5rem;
  text-align: center;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  color: var(--font-gray-deep)
}

.item:hover {
  background-color: var(--bg-blue-shallow);
}

.item:focus {
  background-color: var(--bg-blue-shallow);
  color: var(--font-blue);
  font-weight: bold;
}
</style>

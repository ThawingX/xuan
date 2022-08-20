<script setup lang='ts'>
import { useStandardStore } from '~/stores/standard'
import { $getStandard } from '~/composables/http'
const standardStore = useStandardStore()
const handleKey = async (row: any) => {
  const res = await $getStandard(row.requestKey)
  console.log(res)
  standardStore.standardLists = res.data.data
}
</script>

<template>
  <div class="container">
    <div flex justify-between items-center class="header">
      <div class="title">
        标准检索
      </div>
      <div class="spacer" />
      <search />
    </div>
    <div class="keyMatchContainer">
      <div class="standardType" flex justify-start items-center gap-2>
        <div class="label">
          标准类型
        </div>
        <div v-for="row of standardStore.typeLists" :key="row.mName" class="option" @click="handleKey(row)">
          {{ row.mName }}
        </div>
      </div>
      <div class="standardType" flex justify-start items-center gap-2>
        <div class="label">
          标准性质
        </div>
        <div v-for="row of standardStore.propertyLists" :key="row.mName" class="option" @click="handleKey(row)">
          {{ row.mName }}
        </div>
      </div>
      <div class="standardType" flex justify-start items-center gap-2>
        <div class="label">
          标准状态
        </div>
        <div v-for="row of standardStore.stateLists" :key="row.mName" class="option" @click="handleKey(row)">
          {{ row.mName }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  width: 20%;
  color: var(--font-blue);
  border-bottom: 2px solid var(--font-blue);
}

.spacer {
  width: 80%;
}

.label {
  font-weight: bold;
}

.keyMatchContainer {
  box-shadow: 0 0 0.5px var(--border-gray);
  margin: 0.25rem;
  padding: 0.5rem;
}

.standardType {
  padding: 0.25rem;
  font-size: 0.8125rem;
}

.option {
  font-size: 0.75rem;
}
</style>

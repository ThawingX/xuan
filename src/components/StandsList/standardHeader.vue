<script setup lang='ts'>
import { useStandardStore } from '~/stores/standard'
import { $getStandard } from '~/composables/http'
const standardStore = useStandardStore()
const handleKey = async (row: any) => {
  standardStore.standardLists = []
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
        <div class="label" w20>
          标准类型
        </div>
        <button v-for="row of standardStore.typeLists" :key="row.mName" class="option" @click="handleKey(row)">
          {{ row.mName }}
        </button>
      </div>
      <div class="standardType" flex justify-start items-center gap-2>
        <div class="label" w20>
          标准性质
        </div>
        <button v-for="row of standardStore.propertyLists" :key="row.mName" class="option" @click="handleKey(row)">
          {{ row.mName }}
        </button>
      </div>
      <div class="standardType" flex justify-start items-center gap-2>
        <div class="label" w20>
          标准状态
        </div>
        <button v-for="row of standardStore.stateLists" :key="row.mName" class="option" @click="handleKey(row)">
          {{ row.mName }}
        </button>
      </div>
      <div class="standardType" flex justify-start items-center gap-2>
        <div class="label" w20>
          行业分类
        </div>
        <button v-for="row of standardStore.industryLists" :key="row.mName" class="option" @click="handleKey(row)">
          {{ row.mName }}
        </button>
      </div>
      <div class="standardType" flex justify-start items-center gap-2>
        <div class="label" w20>
          区域/地方
        </div>
        <button v-for="row of standardStore.areaLists" :key="row.mName" class="option" @click="handleKey(row)">
          {{ row.mName }}
        </button>
      </div>
      <div class="standardType" flex justify-start items-center gap-2>
        <div class="label" w20>
          ICS分类
        </div>
        <button v-for="row of standardStore.ICSLists" :key="row.mName" class="option" @click="handleKey(row)">
          {{ row.mName }}
        </button>
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
  width: 180%;
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
.option:hover{
  text-shadow: 0 0 5px var(--font-blue-shallow);
}
.option:focus{
  text-shadow: 0 0 5px var(--font-blue)
}
</style>

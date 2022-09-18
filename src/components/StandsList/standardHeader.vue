<script setup lang='ts'>
import { useStandardStore } from '~/stores/standard'
import { $getStandard } from '~/composables/http'
const standardStore = useStandardStore()
const handleKey = async (row: any) => {
  standardStore.standardLists = []
  const res = await $getStandard(row.requestKey)
  standardStore.standardLists = res.data.data
}
const keyOptions = {
  standardType: {
    title: '标准类型',
    key: 'standardType',
    requestKey: 'standardType',
    options: [
      { label: '国家标准', value: '国家标准' },
      { label: '行业标准', value: '行业标准' },
      { label: '地方标准', value: '地方标准' },
      { label: '团体标准', value: '团体标准' },
      { label: '企业标准', value: '企业标准' },
      { label: '国际标准', value: '国际标准' },
    ],
  },
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
          {{ keyOptions.standardType.title }}
        </div>
        <!-- <el-checkbox v-model="checked1" :label="row.mName" size="small" /> -->
        <button v-for="row of keyOptions.standardType.options" :key="row.value" class="option" @click="handleKey(row)">
          {{ row.label }}
        </button>
      </div>
      <div class="standardType" flex justify-start items-center gap-2>
        <div class="label" w20>
          标准性质
        </div>
        <button v-for="row of standardStore.propertyLists" :key="row.mName" class="option" @click="handleKey(row)">
          {{ }}
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
.container{
  background-color: #ffffff;
  padding:0 1rem;
}
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

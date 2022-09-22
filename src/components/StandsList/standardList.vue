<script setup lang='ts'>
import { useRouter } from 'vue-router'
import { useStandardStore } from '~/stores/standard'
import { usePaginationStore } from '~/stores/standard/Pagination'
import { useStandardFormStore } from '~/stores/standard/standardForm'
const paginationStore = usePaginationStore()
const standardFormStore = useStandardFormStore()
const router = useRouter()
const standardStore = useStandardStore()
function turnToDetail(row: any) {
  standardFormStore.StandardForm.standardType = row.standardType
  router.push({ name: 'detail', params: { ...row } })
}
const getTrimTime = function (time: string) {
  return time.slice(0, 10)
}
const getTypeClass = function (type: string) {
  const classes = ['type']
  switch (type) {
    case '国家标准':
      classes.push('blue')
      break
    case '行业标准':
      classes.push('green')
      break
    case '地方标准':
      classes.push('blue-shallow')
      break
    case '团体标准':
      classes.push('orange')
      break
    case '企业标准':
      classes.push('gray')
      break
    case '国际标准':
      classes.push('purple')
      break
  }
  return classes
}
const getStateName = function (enName: string) {
  for (const item of standardStore.stateLists) {
    if (item.requestKey === enName)
      return item.mName
  }
}
</script>

<template>
  <div class="standardsList">
    <div v-for="row of standardStore.getDivideStandardLists(paginationStore.pageSize, paginationStore.currPage, paginationStore.total)" :key="row.key" class="standardItem" m2 p2 flex flex-col>
      <div class="header" flex justify-start items-baseline gap-2 mb-2>
        <div class="left">
          <div :class="getTypeClass(row.standardType)">
            {{ row.standardType }}
          </div>
        </div>
        <div class="right">
          <div class="topHeader" flex gap-4>
            <span class="sKey" cursor-pointer @click="turnToDetail(row)">{{ row.id }}</span>
            <span class="chName">{{ row.chName }}</span>
            <div class="rightBtn">
              <el-button @click="turnToDetail(row)">
                详情
              </el-button>
            </div>
          </div>

          <div class="CS" mt2 text-xs flex justify-start items-center gap-4>
            <span class="ICS" flex items-center>
              国际标准分类号（ICS）{{ row.ICS }}
            </span>
            <span class="CCS" flex items-center>
              中国标准分类号（CCS）{{ row.CCS }}
            </span>
          </div>
          <div class="department" mt-2 text-sm flex flex-col>
            <div class="item" flex>
              <span>标准状态&nbsp</span>
              <div inline-block color-gray>
                {{ getStateName(row.state) }}
              </div>
            </div>
            <div class="item" flex>
              <span>归口单位&nbsp</span>
              <div inline-block color-gray>
                {{ row.administrativeDepartment }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="timeGroup" flex items-center justify-end gap-4 text-xs>
        <div flex items-center>
          <div inline-block i-carbon-upload />
          发布于&nbsp
          <div inline-block text-1 color-gray>
            {{ getTrimTime(row.releaseTime) }}
          </div>
        </div>
        <div flex items-center>
          <div inline-block i-carbon-upload />
          实施于&nbsp
          <div inline-block text-1 color-gray>
            {{ getTrimTime(row.implementationTime) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sKey {
  color: #0a5ca8
}

.chName {
  color: #46a8e0
}

.rightBtn{
  margin-left:auto;
}
.topHeader{
  width:100%;
}
.right{
  width:100%;
}
.standardItem {
  background-color: #ffffff;
  border:solid 1px #dddddd;
}
.timeGroup{
  background-color:#f5f5f5;
  border-top:solid 1px #dddddd;
  padding:0.25rem;
}
.type{
  padding:1rem;
  box-sizing: content-box;
  margin:0.75rem;
  word-break: normal;
  width:2rem;
  height:2rem;
  font-size:1rem;
  line-height: 1.25rem;
  font-weight: bold;
}
.blue{
  background-color:#428bca;
  color:#f3fbff;
}
.blue-shallow{
  background-color: #5bc0de;
  color:#f3fbff;
}
.green{
  background-color: #5cb85c;
  color:#f3fbff;
}
.orange{
  background-color:#f0ad4e;
  color:#f3fbff;
}
.gray{
  background-color:darkgray;
  color:#f3fbff;
}
.purple{
  background-color: #5d478b;
  color:#f3fbff;
}
.item::before{
  content: "";
  width:0.25rem;
  background-color: #0a5ca8;
  margin:0.125rem;
  margin-right: 1.25rem;
}
</style>

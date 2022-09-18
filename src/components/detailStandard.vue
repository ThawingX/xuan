<script lang="ts" setup>
import { onMounted, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import type { Form } from './type/detail'
import { $getRelation } from '~/composables/http'
import { useOptionNameStore } from '~/stores/standard/optionName'
import { useStandardFormStore } from '~/stores/standard/standardForm'
import { useRelationalStandardStore } from '~/stores/standard/relationalStandard'
const props = defineProps<Props>()
const relationalStandardStore = useRelationalStandardStore()
const router = useRouter()
const standardFormStore = useStandardFormStore()
interface Props {
  info: Form
}
const optionNameStore = useOptionNameStore()
const { info: tempInfo } = toRefs(props)
const info = ref(tempInfo.value)
const openRelationalStandard = function () {
  relationalStandardStore.isShowRelationalStandardDialog = true
  relationalStandardStore.standardId = info.value.id
}
onMounted(async () => {
  const { data } = await $getRelation(info.value.id)
  const { code, message, result } = data
  if (code === 1)
    relationalStandardStore.subStandardList = result
})
function turnToDetail(row: any) {
  standardFormStore.StandardForm.standardType = row.standardType
  info.value = row
}
</script>

<template>
  <div class="container">
    <el-descriptions class="detailContainer" :border="true">
      <el-descriptions-item align="center" label="标准类型">
        {{ info.standardType }}
      </el-descriptions-item>
      <el-descriptions-item align="center" :label="optionNameStore.id.name">
        {{ info.id }}
      </el-descriptions-item>
      <el-descriptions-item align="center" :label="optionNameStore.chName.name">
        {{ info.chName }}
      </el-descriptions-item>
      <el-descriptions-item align="center" :label="optionNameStore.enName.name">
        {{ info.enName }}
      </el-descriptions-item>
      <el-descriptions-item align="center" :label="optionNameStore.state.name">
        {{ info.state }}
      </el-descriptions-item>
      <el-descriptions-item align="center" :label="optionNameStore.property.name">
        {{ info.property }}
      </el-descriptions-item>
      <el-descriptions-item align="center" :label="optionNameStore.CCS.name">
        {{ info.CCS }}
      </el-descriptions-item>
      <el-descriptions-item align="center" :label="optionNameStore.ICS.name">
        {{ info.ICS }}
      </el-descriptions-item>
      <el-descriptions-item align="center" :label="optionNameStore.releaseTime.name">
        {{ info.releaseTime.slice(0, 10) }}
      </el-descriptions-item>
      <el-descriptions-item align="center" :label="optionNameStore.implementationTime.name">
        {{ info.implementationTime.slice(0, 10) }}
      </el-descriptions-item>
      <el-descriptions-item align="center" :label="optionNameStore.administrativeDepartment.name">
        {{ info.administrativeDepartment }}
      </el-descriptions-item>
      <el-descriptions-item align="center" :label="optionNameStore.responsibleDepartment.name">
        {{ info.responsibleDepartment }}
      </el-descriptions-item>
      <el-descriptions-item align="center" :label="optionNameStore.replaceStandard.name">
        {{ info.replaceStandard }}
      </el-descriptions-item>
      <el-descriptions-item align="center" :label="optionNameStore.city.name">
        {{ info.city }}
      </el-descriptions-item>
      <el-descriptions-item align="center" :label="optionNameStore.industryClassfication.name">
        {{ info.industryClassfication }}
      </el-descriptions-item>
      <el-descriptions-item align="center" label="下载地址">
        {{ info.url }}
      </el-descriptions-item>
      <el-descriptions-item :span="2" align="center" label="备注">
        {{ info.comment }}
      </el-descriptions-item>
      <el-descriptions-item align="left" :span="3" label-align="center" label="已关联的标准">
        <div v-for="row of relationalStandardStore.subStandardList" :key="row.id" ml10 mr10 class="subItem">
          <span mr5>{{ row.id }}</span>
          <span mr5>{{ row.chName || row.enName }}</span>
          <span>{{ row.releaseTime.slice(0, 10) }}</span>
          <el-button @click="turnToDetail(row)">
            详情
          </el-button>
          <el-divider />
        </div>
      </el-descriptions-item>
    </el-descriptions>
    <div class="btnGroup">
      <el-button>修改</el-button>
      <el-button>删除</el-button>
      <el-button>上传标准</el-button>
      <el-button @click="openRelationalStandard()">
        添加关联标准
      </el-button>
      <el-button>在线预览</el-button>
      <el-button>下载标准</el-button>
    </div>
  </div>
  <addRelationalStandard />
</template>

<style scoped>
  .detailContainer{
    width:85%;
    margin:auto;
  }
  .subItemContainer{
    width:85%;
    margin:auto;
    display:flex;
    flex-direction:column;
    background-color: #ffffff;
  }
  .btnGroup{
    display: flex;
    position:fixed;
    bottom:0;
    right:0;
  }
  .container{
    width:100%;
    height:100%;
  }
</style>

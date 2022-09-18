<script lang="ts" setup>
import { toRefs } from 'vue'
import type { Form } from './type/detail'
import { useOptionNameStore } from '~/stores/standard/optionName'
import { useRelationalStandardStore } from '~/stores/standard/relationalStandard'
const props = defineProps<Props>()
const relationalStandardStore = useRelationalStandardStore()
interface Props {
  info: Form
}
const optionNameStore = useOptionNameStore()
const { info } = toRefs(props)
</script>

<template>
  <div class="container">
    <el-descriptions class="detailContainer" :border="true">
      <el-descriptions-item label="标准类型">
        {{ info.standardType }}
      </el-descriptions-item>
      <el-descriptions-item :label="optionNameStore.id.name">
        {{ info.id }}
      </el-descriptions-item>
      <el-descriptions-item :label="optionNameStore.chName.name">
        {{ info.chName }}
      </el-descriptions-item>
      <el-descriptions-item :label="optionNameStore.enName.name">
        {{ info.enName }}
      </el-descriptions-item>
      <el-descriptions-item :label="optionNameStore.state.name">
        {{ info.state }}
      </el-descriptions-item>
      <el-descriptions-item :label="optionNameStore.property.name">
        {{ info.property }}
      </el-descriptions-item>

      <el-descriptions-item :label="optionNameStore.CCS.name">
        {{ info.CCS }}
      </el-descriptions-item>
      <el-descriptions-item :label="optionNameStore.ICS.name">
        {{ info.ICS }}
      </el-descriptions-item>
      <el-descriptions-item :label="optionNameStore.releaseTime.name">
        {{ info.releaseTime }}
      </el-descriptions-item>
      <el-descriptions-item :label="optionNameStore.implementationTime.name">
        {{ info.implementationTime }}
      </el-descriptions-item>
      <el-descriptions-item :label="optionNameStore.administrativeDepartment.name">
        {{ info.administrativeDepartment }}
      </el-descriptions-item>
      <el-descriptions-item :label="optionNameStore.responsibleDepartment.name">
        {{ info.responsibleDepartment }}
      </el-descriptions-item>
      <el-descriptions-item :label="optionNameStore.replaceStandard.name">
        {{ info.replaceStandard }}
      </el-descriptions-item>
      <el-descriptions-item :label="optionNameStore.city.name">
        {{ info.city }}
      </el-descriptions-item>
      <el-descriptions-item :label="optionNameStore.industryClassfication.name">
        {{ info.industryClassfication }}
      </el-descriptions-item>
      <el-descriptions-item label="下载地址">
        {{ info.url }}
      </el-descriptions-item>
      <el-descriptions-item label="备注">
        {{ info.comment }}
      </el-descriptions-item>
    </el-descriptions>
    <div class="btnGroup">
      <el-button>修改</el-button>
      <el-button>删除</el-button>
      <el-button>上传标准</el-button>
      <el-button @click="relationalStandardStore.isShowRelationalStandardDialog = true">
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

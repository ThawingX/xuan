<script lang="ts" setup>

</script>

<template>
  <el-table :data="tableData" style="width: 100%">
    <!--  标准id  查找 -->
    <div class="searchContainer" flex justify-center items-center gap-8>
      <el-button type="primary" @click="handleSeach">
        查找
      </el-button>
      <el-input v-model="optionStore.subOption.id" label="标准号" :clearable="true" placeholder="请输入标准号" />
      <el-input label="中文标准名称" :disabled="true" placeholder="中文标准名称" />
      <el-input label="英文标准名称" :disabled="true" placeholder="英文标准名称" />
    </div>
    <el-table-column prop="name" label="Name" width="120" />
    <el-table-column prop="state" label="State" width="120" />
    <el-table-column prop="city" label="City" width="120" />
    <el-table-column prop="address" label="Address" width="600" />
    <el-table-column prop="zip" label="Zip" width="120" />
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default>
        <el-button link type="primary" size="small" @click="handleClick">
          Detail
        </el-button>
        <el-button link type="primary" size="small">
          Edit
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped>

</style>

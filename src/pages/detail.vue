<script setup lang='ts'>
import { useRoute } from 'vue-router'
const route = useRoute()
const row: any = route.params
</script>

<template>
  <div class="container">
    <div class="detailTable">
      <keep-alive include="detailStandard">
        <detailStandard :info="row" />
      </keep-alive>
    </div>
  </div>
</template>

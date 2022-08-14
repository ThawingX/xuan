<script setup lang='ts'>
import { useRoute } from 'vue-router'
import type { Form } from './menus/standards/types/form'
const route = useRoute()
const row: Form | any = route.params
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

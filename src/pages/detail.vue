<script setup lang='ts'>
import type { Form } from './menus/standards/types/form'
import { useRoute } from 'vue-router';
const route = useRoute()
let row: Form | any = route.params
</script>
<template>
  <div class='container'>
    <div class='detailTable'>
      <keep-alive include="detailStandard">
        <detailStandard :info="row"></detailStandard>
      </keep-alive>
    </div>

  </div>
</template>
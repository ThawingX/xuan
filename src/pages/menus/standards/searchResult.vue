<script setup lang='ts'>
import { useRoute, useRouter } from 'vue-router'
import { onMounted } from 'vue'
const router = useRouter()
const route = useRoute()
const { list } = route.query
const standardsList = JSON.parse(list)
function turnToDetail(row: any) {
  router.push({ name: 'detail', params: { ...row } })
}

onMounted(async () => {
  console.log(standardsList)
})
</script>

<template>
  <StandsList :list="standardsList" />
</template>

<style scoped>
.sKey {
  color: var(--font-blue)
}

.chName {
  color: var(--font-blue-shallow)
}

.standardItem {
  box-shadow: 0 0 5px inset var(--border-gray)
}
</style>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()

</script>

<template>
  <main>
    <StandsList />
    <Pagination class="bottom" />
  </main>
</template>

<style scoped>
main {
  width:100%;
  /* margin:1rem; */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
}
.bottom{
  margin-top: auto;
}
</style>

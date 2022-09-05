<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const backToLogin = function () {
  router.push('/login')
}
</script>

<template>
  <!-- <standardAside /> -->
  <!-- <button border @click="backToLogin">back-to-login</button> -->
  <main>
    <StandsList />
    <Pagination />
  </main>
</template>

<style scoped>
main {
  width:100%;
  margin:1rem ;
}
</style>

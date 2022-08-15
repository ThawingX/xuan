<script lang="ts" setup>

</script>

<template>
  <div class="container" flex justify-center items-start>
    <standardAside />
    <main>
      <StandsList />
    </main>
  </div>
</template>

<style scoped>
.container {
  width: 85%;
  height: 100%;
  margin: 0 auto;
  background-color: var(--bg-white);
}

main {
  width: 80%;
  flex:4 2 0;
}
</style>

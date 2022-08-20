<template>
  <main>
    <router-view />
  </main>
</template>

<style scoped>
main {
  background-color: var(--bg-blue-shallow);
  /* height:100%; */
  /* 需要修改 */
  height:250vh;
  width:100%;
  overflow:hidden;
}
</style>

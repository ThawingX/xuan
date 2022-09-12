<script setup lang='ts'>
import { useRouter } from 'vue-router'
const router = useRouter()
function backHome() {
  router.push('/')
}
</script>

<template>
  <header>
    <topConnection />
    <nav flex justify-start items-center>
      <div flex-1 cursor-pointer @click="backHome">
        <img ml3 h-20 inline-flex src="../styles/assets/logo.png" alt="新黄浦中医联创院">
      </div>
      <div m-4 inline-flex justify-center text-center items-center flex-wrap flex-col class="title">
        <div class="chTitle" text-xl>
          中医药装备标准与检验检测重点实验室
        </div>
        <div class="enTitle" text-xs>
          Key Laboratory of Traditional Chinese Medicine Devices for Standards and Inspection
        </div>
      </div>
      <div flex-1 flex justify-end>
        <userAvatar />
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
}

.connection {
  background-color: var(--bg-blue);
}

.chTitle {
  color: var(--font-blue);
  font-weight: 700;
}

.enTitle {
  color: var(--font-blue-shallow);
  font-weight: 500;
}

.title {
  flex: 2 1 0%;
}

nav {
  background-color: var(--bg-white);
}
</style>

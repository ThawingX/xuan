<template>
  <header>
    <div class="connection" h-5 flex items-center justify-end>
      <div inline-flex i-carbon-phone-voice-filled></div>
      <div inline-flex>联系方式</div>
    </div>
    <nav flex justify-start items-center>
      <div flex-1>
        <img h-20 inline-flex src="https://raw.githubusercontent.com/ThawingX/images/master/logo.png" alt="新黄浦中医联创院" />
      </div>
      <div m-4 inline-flex justify-center text-center items-center flex-wrap flex-col class='title'>
        <div class="chTitle" text-xl>中医药装备标准与检验检测重点实验室</div>
        <div class="enTitle">Key Lab of Traditional Chinese Medicine Devices for Standards and Inspection</div>
      </div>
      <div class="spacer" flex-1></div>
    </nav>
  </header>
</template>
<style>
.connection {
  background-color: var(--bg-blue);
}

.chTitle {
  color: var(--font-blue-deep);
  font-weight: 700;
}


.enTitle {
  color: var(--font-blue);
  font-weight: 500;
}

.title {
  flex: 2 1 0%;
}

nav {
  background-color: var(--bg-white);
}
</style>
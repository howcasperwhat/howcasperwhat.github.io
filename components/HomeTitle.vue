<script setup lang='ts'>
const title = 'Casper\'s Blog'
</script>

<template>
  <div id="title-main">
    <div>
      <div id="title-mask">
        {{ title }}
      </div>
      <div id="title-text">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<style scoped>
#title-main {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 56px;
  font-weight: 700;
  user-select: none;
}

#title-main:first-child {
  width: 100vw;
}

#title-text {
  height: 72px;
  top: -72px;
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
}

#title-mask {
  color: var(--vp-c-brand);
  white-space: nowrap;
  overflow-x: hidden;
  height: 72px;
  z-index: 10;
  width: 0%;
  position: relative;
  display: flex;
  align-items: center;
  filter: drop-shadow(0 0 52px var(--vp-c-brand));
  border-right: 4px solid var(--vp-c-brand);
  box-sizing: border-box;
  animation: animate1 2s linear 1 forwards, animate2 1s linear 2s 3 forwards;
}

@keyframes animate1 {
  0% {
    width: 0%;
  }

  2%,
  11% {
    width: 11%;
  }

  12%,
  16% {
    width: 19%;
  }

  17%,
  22% {
    width: 28%;
  }

  23%,
  27% {
    width: 37%;
  }

  28%,
  30% {
    width: 46%;
  }

  31%,
  43% {
    width: 52%;
  }

  44%,
  54% {
    width: 55%;
  }

  55%,
  61% {
    width: 63%;
  }

  62%,
  68% {
    width: 67%;
  }

  69%,
  85% {
    width: 76%;
  }

  86%,
  91% {
    width: 80%;
  }

  92%,
  96% {
    width: 89%;
  }

  97%,
  100% {
    width: 100%;
  }
}

@keyframes animate2 {

  0%,
  50% {
    border-right-color: var(--vp-c-brand);
  }

  51%,
  100% {
    border-right-color: transparent;
  }
}
</style>
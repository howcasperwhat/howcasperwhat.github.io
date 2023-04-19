<script setup lang='ts'>
const title = 'Casper Huang'
</script>

<template>
  <div id="title-main">
    <div id="title-text">
      {{ title }}
    </div>
  </div>
</template>

<style scoped>
#title-main {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  font-size: 2rem;
  font-weight: 700;
  user-select: none;
  height: auto;
  max-width: 600px;
  margin: auto;
}

#title-text {
  margin-top: 3rem;
  /* margin-bottom: 0.5rem; */
  height: auto;
  line-height: normal;
}
</style>
<script setup lang='ts'>
defineProps({
  icon: {
    type: String,
    default: 'logo.png'
  },
  title: {
    type: String,
    default: 'default'
  },
  details: {
    type: String,
    default: 'default'
  },
  link: {
    type: String,
    required: true
  }
})
</script>

<template>
  <a
    id="item-main"
    :href="link"
    target="_blank"
  >
    <div id="item-icon">
      <img :src="'/img/' + icon" />
    </div>
    <div id="item-text">
      <div id="item-title">
        {{ title }}
      </div>
      <div id="item-details">
        {{ details }}
      </div>
    </div>
  </a>
</template>

<style scoped>
#item-main {
  width: 300px;
  height: 164px;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: #88888822;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
}

#item-icon {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background-color: #11111122;
  display: flex;
  justify-content: center;
  align-items: center;
}

#item-text {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

#item-icon img {
  width: 28px;
  height: 28px;
}

#item-main * {
  margin: 0;
  padding: 0;
  border: 0;
}

#item-title {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 4px;
}

#item-details {
  font-size: 14px;
  font-weight: 400;
  opacity: 80%;
}
</style>
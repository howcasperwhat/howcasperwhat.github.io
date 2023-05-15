<script setup lang="ts">
import { ref } from "vue"
const activeState = ref(true)
const switchTheme = () => {
  activeState.value = !activeState.value
  const html = document.querySelector("html")
  html?.classList.toggle("dark")
}
</script>
<template>
  <span class="button" :class="{ night: activeState }" @click="switchTheme" id="lll">
    <span class="btn-inner">
      <span class="circle">
        <span class="circle-night">
          <span class="crater"></span>
          <span class="crater crater2"></span>
          <span class="crater crater3"></span>
        </span>
      </span>
      <span class="halo-box">
        <span class="halo"></span>
        <span class="halo halo2"></span>
        <span class="halo halo3"></span>
      </span>
      <span class="clouds">
        <span class="cloud" v-for="(item, index) in 7" :key="index"
          :class="'cloud' + (index + 1)"></span>
      </span>
      <span class="clouds clouds2">
        <span class="cloud" v-for="(item, index) in 7" :key="index"
          :class="'cloud' + (index + 1)"></span>
      </span>
      <span class="stars">
        <span class="star" v-for="(item, index) in 8" :key="index" :class="'star' + index">
          <svg class="icon" viewBox="0 0 1024 1024" width="200" height="200"
            style="width: 100%; height: 100%">
            <path
              d="M1004.1 512L692 332 512 19.9 332 332 19.9 512 332 692l180 312.1L692 692z"
              fill="#fff"></path>
          </svg>
        </span>
      </span>
    </span>
  </span>
</template>
<style scoped>
.button {
  display: inline-block;
  line-height: 0;
  cursor: pointer;
}

.btn-inner {
  transition: all 0.5s ease-in-out !important;
  line-height: 0;
  display: inline-block;
  position: relative;
  height: 66px;
  width: 150px;
  border-radius: 100px;
  background: #1c80da;
  box-shadow: inset 0 2px 6px #000, 0 0 3px rgba(0, 0, 0, 0.6);
  overflow: hidden;
}

.circle {
  transition: all 0.5s ease-in-out !important;
  position: absolute;
  z-index: 2;
  overflow: hidden;
  width: 54px;
  height: 54px;
  top: 6px;
  left: 6px;
  background: #ffdd08;
  border-radius: 100px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.6), inset -0.5px -1px 3px rgba(0, 0, 0, 0.6), inset 1px 1px 3px rgba(255, 255, 255, 0.8);
}

.circle .circle-night {
  transition: all 0.5s ease-in-out !important;
  position: absolute;
  top: 0;
  left: 101%;
  width: 100%;
  height: 100%;
  border-radius: 100px;
  background: #c7d0da;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.6), inset -0.5px -1px 2px rgba(0, 0, 0, 0.6), inset 1px 1px 2px rgba(255, 255, 255, 0.8);
}

.circle .crater {
  position: absolute;
  width: 25%;
  height: 25%;
  top: 12%;
  left: 44%;
  border-radius: 100px;
  background: #909baf;
}

.circle .crater.crater2 {
  width: 34%;
  height: 34%;
  top: 42%;
  left: 16%;
}

.circle .crater.crater3 {
  width: 19%;
  height: 19%;
  top: 62%;
  left: 63%;
}

.halo-box {
  transition: all 0.5s ease-in-out !important;
  position: absolute;
  z-index: 1;
  width: 0;
  height: 0;
  left: calc(66px / 2);
  top: calc(66px / 2);
}

.halo-box .halo {
  transition: all 0.5s ease-in-out !important;
  width: 92.4px;
  height: 92.4px;
  position: absolute;
  background: #fff;
  opacity: 0.1;
  border-radius: 1000px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.halo-box .halo.halo2 {
  width: 117.4px;
  height: 117.4px;
}

.halo-box .halo.halo3 {
  width: 142.4px;
  height: 142.4px;
}

.clouds {
  transition: all 0.5s ease-in-out !important;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  transition-delay: 0s;
}

.clouds.clouds2 {
  transition-delay: 0.12s;
  top: 19%;
  left: -5%;
  opacity: 1;
  transform: rotate(5deg);
}

.clouds.clouds2 .cloud {
  top: 2%;
  left: 92%;
}

.clouds.clouds2 .cloud.cloud2 {
  top: 39%;
  left: 69%;
}

.clouds .cloud {
  position: absolute;
  background: #fff;
  border-radius: 100px;
  width: 59.4px;
  height: 59.4px;
  top: -17%;
  left: 84%;
}

.clouds .cloud.cloud2 {
  width: 44.88px;
  height: 44.88px;
  top: 39%;
  left: 69%;
}

.clouds .cloud.cloud3 {
  width: 48.18px;
  height: 48.18px;
  top: 47%;
  left: 54%;
}

.clouds .cloud.cloud4 {
  width: 13.2px;
  height: 13.2px;
  top: 64%;
  left: 49.7%;
}

.clouds .cloud.cloud5 {
  width: 37.62px;
  height: 37.62px;
  top: 64%;
  left: 32%;
}

.clouds .cloud.cloud6 {
  width: 48.18px;
  height: 48.18px;
  top: 81%;
  left: 13%;
}

.clouds .cloud.cloud7 {
  width: 29.7px;
  height: 29.7px;
  top: 85%;
  left: 7%;
}

.stars {
  transition: all 0.5s ease-in-out !important;
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
}

.stars .star {
  transition: all 0.5s ease-in-out !important;
  transform: translateY(-20px) scale(0);
  display: inline-block;
  position: absolute;
  left: 20%;
  top: 20%;
  width: 8%;
}

.stars .star.star2 {
  left: 10%;
  top: 30%;
  width: 4%;
  transition-delay: 0.1s;
}

.stars .star.star3 {
  left: 20%;
  top: 48%;
  width: 3%;
  transition-delay: 0.15s;
}

.stars .star.star4 {
  left: 14%;
  top: 64%;
  width: 4%;
  transition-delay: 0.24s;
}

.stars .star.star5 {
  left: 36%;
  top: 71%;
  width: 4%;
  transition-delay: 0.2s;
}

.stars .star.star6 {
  left: 23%;
  top: 79%;
  width: 5%;
  transition-delay: 0.26s;
}

.stars .star.star7 {
  left: 44%;
  top: 26%;
  width: 4%;
  transition-delay: 0.04s;
}

.stars .star.star8 {
  left: 37%;
  top: 50%;
  width: 4%;
  transition-delay: 0.14s;
}

.stars .star.star9 {
  left: 44%;
  top: 68%;
  width: 6%;
  transition-delay: 0.12s;
}

.stars .star.star10 {
  left: 52%;
  top: 37%;
  width: 8%;
  transition-delay: 0.05s;
}

.night .btn-inner {
  background: #252525;
}

.night .circle {
  left: 90px;
}

.night .circle .circle-night {
  left: 0;
}

.night .halo-box {
  left: calc(150px - 66px / 2);
}

.night .halo-box .halo {
  opacity: 0.13;
}

.night .clouds {
  top: 100%;
  transition-delay: 0.12s;
}

.night .clouds.clouds2 {
  transition-delay: 0s;
}

.night .stars {
  top: 0;
}

.night .stars .star {
  transform: translateY(0) scale(1);
}

.button:hover .circle {
  transform: translateX(5px);
}

.button:hover .halo-box {
  transform: translateX(5px);
}

.button:hover.night .circle {
  transform: translateX(-5px);
}

.button:hover.night .halo-box {
  transform: translateX(-5px);
}
</style>



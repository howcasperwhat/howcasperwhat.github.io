<template>
  <div flex op="!80" font-mono>
    <div basis="8/32" v-text="0" />
    <div basis="8/32" v-text="8" />
    <div basis="8/32" v-text="16" />
    <div basis="8/32" flex="~ justify-between">
      <div v-text="24" />
      <div v-text="31" />
    </div>
  </div>
  <div
    grid="~ flow-row" b="~ solid 1"
    children:b-t="~ solid 1"
    first:children:b-t="~ solid 0"

    op="!80"
    children:children:b-l="~ solid 1"
    first:children:children:b-l="~ solid 0"
    rounded children:flex children:children:flex-center children:children:bg-blue:10 children:children:p-2
  >
    <div>
      <div basis="16/32" v-text="'源端口号'" />
      <div basis="16/32" v-text="'目的端口号'" />
    </div>
    <div>
      <div basis="16/32" v-text="'UDP总长度'" />
      <div basis="16/32" v-text="'校验和'" />
    </div>
    <div>
      <div basis="32/32" important-bg-green:10 v-text="'数据'" />
    </div>
  </div>
</template>

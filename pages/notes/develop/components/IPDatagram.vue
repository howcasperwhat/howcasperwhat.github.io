<template>
  <div flex op="!80" font-mono>
    <div basis="4/32" v-text="0" />
    <div basis="4/32" v-text="4" />
    <div basis="8/32" v-text="8" />
    <div basis="3/32" v-text="16" />
    <div basis="13/32" flex="~ justify-between">
      <div v-text="19" />
      <div v-text="31" />
    </div>
  </div>
  <div
    grid="~ flow-row" rounded b="~ solid 1"
    children:flex children:b-t="~ solid 1"
    first:children:b-t="~ solid 0"
    children:children:flex-center
    children:children:p-2 op="!80"
    children:children:b-l="~ solid 1"
    first:children:children:b-l="~ solid 0"
    children:children:bg-blue:10
  >
    <div>
      <div basis="4/32" v-text="'版本'" />
      <div basis="4/32" v-text="'IHL'" />
      <div basis="8/32" important:bg-yellow:10 v-text="'服务类型'" />
      <div basis="16/32" v-text="'总长度'" />
    </div>
    <div>
      <div basis="16/32" v-text="'标识'" />
      <div basis="3/32" v-text="'标志'" />
      <div basis="13/32" v-text="'片偏移'" />
    </div>
    <div>
      <div basis="8/32" v-text="'生存时间'" />
      <div basis="8/32" v-text="'协议'" />
      <div basis="16/32" v-text="'首部校验和'" />
    </div>
    <div>
      <div basis="32/32" v-text="'源地址'" />
    </div>
    <div>
      <div basis="32/32" v-text="'目的地址'" />
    </div>
    <div>
      <div basis="28/32" v-text="'选项'" /> <!-- not true length -->
      <div basis="4/32" v-text="'填充'" /> <!-- not true length -->
    </div>
    <div>
      <div basis="32/32" important:bg-green:10 v-text="'数据'" />
    </div>
  </div>
</template>

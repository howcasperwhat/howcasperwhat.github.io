<template>
  <div flex op="!80" font-mono>
    <div basis="4/32" v-text="0" />
    <div basis="3/32" v-text="4" />
    <div basis="9/32" v-text="7" />
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
      <div basis="16/32" v-text="'源端口'" />
      <div basis="16/32" v-text="'目的端口'" />
    </div>
    <div>
      <div basis="32/32" v-text="'序号'" />
    </div>
    <div>
      <div basis="32/32" v-text="'确认号'" />
    </div>
    <div>
      <div basis="4/32" v-text="'数据偏移'" />
      <div basis="3/32" v-text="'保留'" />
      <div basis="1/32" p-x-0 text-center font-mono v-text="'N S'" />
      <div basis="1/32" p-x-0 text-center font-mono v-text="'C W R'" />
      <div basis="1/32" p-x-0 text-center font-mono v-text="'E C E'" />
      <div basis="1/32" p-x-0 text-center font-mono v-text="'U R G'" />
      <div basis="1/32" p-x-0 text-center font-mono v-text="'A C K'" />
      <div basis="1/32" p-x-0 text-center font-mono v-text="'P S H'" />
      <div basis="1/32" p-x-0 text-center font-mono v-text="'R S T'" />
      <div basis="1/32" p-x-0 text-center font-mono v-text="'S Y N'" />
      <div basis="1/32" p-x-0 text-center font-mono v-text="'F I N'" />
      <div basis="16/32" v-text="'窗口大小'" />
    </div>
    <div>
      <div basis="16/32" v-text="'校验和'" />
      <div basis="16/32" v-text="'紧急指针'" />
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

<script setup lang='ts'>
const props = defineProps<{ lhs: string; rhs: string; op: string }>()
let [left, right] = [props.lhs, props.rhs].map(s => s.includes('.') ? s : `${s}.0`)
const [lInt, lDec] = left.split('.')
const [rInt, rDec] = right.split('.')
const [iMax, dMax] = [Math.max(lInt.length, rInt.length), Math.max(lDec.length, rDec.length)]
left = `${lInt.padStart(iMax, '0')}.${lDec.padEnd(dMax, '0')}`
right = `${rInt.padStart(iMax, '0')}.${rDec.padEnd(dMax, '0')}`
!(left <= right) || ([left, right] = [right, left])
const result = (() => {
  const k = props.op === '+' ? +1 : -1
  let [carry, sum] = [0, 0]
  const answer = Array.from({ length: left.length }).fill('0')
  for (let i = left.length - 1; i >= 0; i--) {
    if (left[i] === '.') {
      answer[i] = '.'
      continue
    }
    sum = Number.parseInt(left[i]) + Number.parseInt(right[i]) * k + carry
    answer[i] = (sum + 2) % 2
    carry = Math.floor(sum / 2)
  }
  answer.unshift((carry % 2).toString()[0])
  return answer.join('')
})()
</script>

<template>
  <div
    overflow-scroll m-y-2
    class="hidden-webkit-scrollbar"
  >
    <div
      grid="~ flow-row" font-mono
      w-max children:p-y-1
    >
      <div>
        &nbsp;&nbsp;
        {{ left }}
      </div>
      <div>
        {{ op }}&nbsp;
        {{ right }}
      </div>
      <div b-t="1 solid gray">
        &nbsp;
        {{ result }}
      </div>
    </div>
  </div>
</template>

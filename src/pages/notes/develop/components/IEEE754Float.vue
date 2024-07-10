<script setup lang='ts'>
const props = defineProps<{ value?: number }>()
const parts = [
  { descriptions: 'sign', bits: 1, color: 'purple' },
  { descriptions: 'exponent', bits: 11, color: 'blue' },
  { descriptions: 'mantissa', bits: 52, color: 'green' },
]
const IEEE754 = ((value: number | undefined): string[] | undefined => {
  if (value === undefined)
    return
  const sign = value < 0 ? 1 : 0
  const binary = value.toString(2)
  let exponent: number, mantissa: number
  if (Number.isInteger(value)) {
    exponent = binary.length - 1
    mantissa = Number.parseInt(binary, 2)
  }
  else {
    const [integer, decimal] = binary.split('.')
    if (integer === '0')
      exponent = -decimal.indexOf('1') - 1
    else exponent = integer.length - 1
    mantissa = Number.parseInt(integer + decimal, 2)
  }
  exponent += 1023
  return [
    sign.toString(2),
    exponent.toString(2).padStart(11, '0'),
    mantissa.toString(2).slice(1).padEnd(52, '0'),
  ]
})(props.value)
</script>

<template>
  <div
    flex="~ items-center" b="1 solid gray"
    even:children:b-x="1 solid gray" m-y-2 rounded
    children:flex="col center" overflow-scroll
    class="hidden-webkit-scrollbar"
  >
    <div
      v-for="part, _ in parts" :key="_" children-p-2
      :basis="`${part.bits}/64`"
      :bg="`${part.color}`" bg-op-10
    >
      <span
        w-full b-b="1 solid gray"
        flex="~ justify-center"
        v-text="part.descriptions"
      />
      <span v-if="value" v-text="IEEE754[_]" />
      <span v-else v-text="`(${part.bits}bits)`" />
    </div>
  </div>
</template>

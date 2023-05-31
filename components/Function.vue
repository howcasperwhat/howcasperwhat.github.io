<script setup lang='ts'>
import { useData } from 'vitepress';
import { nextTick, onMounted } from 'vue';
const { isDark } = useData()
const github = "https://github.com/howcasperwhat/howcasperwhat.github.io"
const changeTheme = () => {
  isDark.value = !isDark.value
  const bodyStyle = document.body.style
  bodyStyle.backgroundColor = isDark.value ? "#050505" : "#ffffff"
  bodyStyle.color = isDark.value ? "#ffffff" : "#050505"
  document.querySelector('html')?.classList.toggle('theme-dark')
}
const toggleDark = (event: MouseEvent) => {
  // @ts-expect-error experimental API
  const isAppearanceTransition = document.startViewTransition
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!isAppearanceTransition) {
    changeTheme()
    return
  }
  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(async () => {
    await nextTick()
    changeTheme()
  })
  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]
    document.documentElement.animate(
      {
        clipPath: isDark.value
          ? [...clipPath].reverse()
          : clipPath,
      },
      {
        duration: 500,
        easing: 'ease-out',
        pseudoElement: isDark.value
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)',
      },
    )
  })
}
onMounted(() => {
  changeTheme()
})
</script>
<template>
  <div flex="~ items-center">
    <button @click="toggleDark" m-r-2>
      <div :i="isDark ? 'carbon-moon' : 'carbon-sun'" text-6 />
    </button>
    <a :href="github" target="_blank" m-l-2>
      <div i="iconoir-github" text-6 />
    </a>
  </div>
</template>
<style scoped></style>
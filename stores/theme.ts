import { useWindowSize } from '@vueuse/core'
import { watch, ref, nextTick } from 'vue'

const isDark = ref(true)
watch(isDark, () => {
  document.querySelectorAll('body, html').forEach((element) => {
    element.classList.toggle('light')
  })
})
const toggleTheme = (event?: MouseEvent) => {
  // @ts-expect-error experimental API
  const isAppearanceTransition = document.startViewTransition
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!isAppearanceTransition) {
    isDark.value = !isDark.value
    return
  }
  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(async () => {
    await nextTick()
    isDark.value = !isDark.value
  })
  const x = event ? event.clientX : useWindowSize().width.value >> 1
  const y = event ? event.clientY : useWindowSize().height.value >> 1
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
        easing: 'ease-in',
        pseudoElement: isDark.value
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)',
      },
    )
  })
}
export const useThemeStore = () => {
  return { isDark, toggleTheme }
}
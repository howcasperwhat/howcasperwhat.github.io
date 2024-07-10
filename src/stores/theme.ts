import { useWindowSize, useStorage } from '@vueuse/core'
import { watch, ref, nextTick } from 'vue'

const theme = ref('dark')
watch(theme, () => {
  if (typeof document === 'undefined') return
  document.querySelectorAll('html').forEach((element) => {
    element.classList.toggle('dark')
  })
})
useStorage('theme', theme)

const isDark = () => theme.value === 'dark'
const switchTheme = () => {
  theme.value = isDark() ? 'light' : 'dark'
}

const toggleTheme = (event?: MouseEvent) => {
  // @ts-expect-error: Experimental API
  const isAppearanceTransition = document.startViewTransition
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!isAppearanceTransition) {
    switchTheme()
    return
  }
  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(async () => {
    await nextTick()
    switchTheme()
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
    document.documentElement.animate({
      clipPath: isDark()
        ? [...clipPath].reverse()
        : clipPath,
    }, {
      duration: 500,
      easing: 'ease-in',
      pseudoElement: isDark()
        ? '::view-transition-old(root)'
        : '::view-transition-new(root)',
    })
  })
}

export const useThemeStore = () => {
  return { theme, toggleTheme }
}

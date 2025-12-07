import { useDark } from '@vueuse/core'
import { nextTick } from 'vue'

export const isDark = useDark()

export function toggleTheme(event: MouseEvent) {
  const isAppearanceTransition = !!document.startViewTransition
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!isAppearanceTransition) {
    isDark.value = !isDark.value
    return
  }
  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  const transition = document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  })
  transition.ready.then(async () => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]
    document.documentElement.animate({
      clipPath,
    }, {
      duration: 400,
      easing: 'ease-in-out',
      pseudoElement: '::view-transition-new(root)',
    })
  })
}

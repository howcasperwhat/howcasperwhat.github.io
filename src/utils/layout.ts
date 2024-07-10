const setAPPHeight = (el: HTMLElement) => {
  const windowHeight = window.innerHeight
  const headerHeight = (5 + 8 + 8) * 0.25
  const footerHeight = (4 + 6 + 8) * 0.25
  el.style.height = `calc(${windowHeight}px - ${headerHeight}rem - ${footerHeight}rem - 3rem)`
}

export { setAPPHeight }

import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss'

const icons = [
  'carbon-checkmark-filled',
  'carbon-information-filled',
  'carbon-warning-filled',
  'carbon-close-filled',
  'carbon:checkmark',
  'carbon:checkmark-outline',
  'carbon:continue',
  'carbon:pause',
  'carbon:development',
  'carbon:chemistry',
  'carbon:code',
]
const colors = ['green', 'blue', 'yellow', 'red', 'purple', 'orange', 'transparent']
const basis = ['1/64', '11/64', '52/64']
const dev = ['html5', 'css3', 'javascript', 'typescript', 'matlab', 'python', 'java', 'vuejs']
const processes = ['pause', 'continue', 'done']

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'height': '1.2em',
        'width': '1.2em',
        'vertical-align': 'text-bottom',
      },
    }),
    presetWebFonts({
      fonts: {
        sans: 'Inter:400,600,800',
        mono: 'DM Mono:400,600',
        condensed: 'Roboto Condensed',
        wisper: 'Bad Script',
      },
    }),
  ],
  rules: [
    [/^text-w-(bold|bolder|normal|lighter)$/, match => ({ 'font-weight': match[1] })],
    [/^text-w-(\d+)$/, match => ({ 'font-weight': `${match[1]}00` })],
    [/^text-h-(normal)$/, match => ({ 'line-height': match[1] })],
    [/^duration-([a-z]+)-(\d+)$/, match => ({ transition: `${match[1]} ${match[2]}ms` })],
    [/^b-gradient-to-(left|right|top|bottom)$/, match => ({
      'border-image': `linear-gradient(to ${match[1]}, var(--un-gradient-from), var(--un-gradient-to)) 1`,
    })],
    ['justify-safe-center', { 'justify-content': 'safe center' }],
  ],
  safelist: [
    ...dev.map(d => `i-devicon:${d}`),
    ...icons.map(icon => `i-${icon}`),
    ...basis.map(b => `[basis="${b}"]`),
    ...colors.map(color => `[c="${color}"]`),
    ...colors.map(color => `[b="${color}"]`),
    ...colors.map(color => `[bg="${color}"]`),
    ...colors.map(color => `[from="${color}"]`),
    ...colors.map(color => `[to="${color}"]`),
    ...processes.map(process => `[process="${process}"]`),
  ],
  shortcuts: [
    ['btn', 'px-4 py-2 rounded-.6'],
    ['ipt', 'px-2 py-1 rd-.5 bg-transparent'],
    ['flex-center', 'flex justify-safe-center items-center'],
    ['process-pause', 'i-carbon:pause c-yellow'],
    ['process-continue', 'i-carbon:continue c-blue'],
    ['process-done', 'i-carbon:checkmark-outline c-green'],
  ],
})

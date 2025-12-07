import antfu from '@antfu/eslint-config'

module.exports = antfu({
  typescript: true,
  unocss: true,
  pnpm: true,
  vue: true,
  ignores: ['src/plugins/router.ts'],
})

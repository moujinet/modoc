import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'app',

  typescript: true,
  markdown: true,
  vue: true,

  stylistic: {
    indent: 2,
    quotes: 'single',
  },

  ignores: [
    'dist',
    'snapshots*',
    'node_modules',
  ],
})

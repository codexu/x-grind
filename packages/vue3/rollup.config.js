import { createRollupConfig } from '../../build/create'
import pkg from './package.json'

const name = 'GrindForVue3'

export default createRollupConfig({
  input: './src/App.vue',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name,
    },
    {
      file: pkg.module,
      format: 'esm',
      name,
    },
  ]
})
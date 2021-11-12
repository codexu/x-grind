import { createRollupConfig } from '../../build/create'
import pkg from './package.json'

const name = 'GrindCore'

export default createRollupConfig({
  output: [
    {
      file: pkg.module,
      format: 'esm',
      name,
    },
    {
      file: pkg.main,
      format: 'umd',
      name,
    }
  ]
})
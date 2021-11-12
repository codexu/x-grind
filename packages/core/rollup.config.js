import { createRollupConfig } from '../../build/create'
import pkg from './package.json'

const name = 'GrindCore'

const configList = []

const esmConf = createRollupConfig({
  output: {
    file: pkg.module,
    format: 'esm',
    name,
  },
})
configList.push(esmConf)

export default configList

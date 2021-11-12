import { createRollupConfig } from '../../build/create'
import pkg from './package.json'

const name = 'GrindForVue3'

const configList = []

const esmConf = createRollupConfig({
  input: './src/App.vue',
  output: {
    file: pkg.module,
    format: 'esm',
    name,
    globals: {
      'vue': 'Vue',
    },
  },
})
configList.push(esmConf)

export default configList

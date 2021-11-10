import { createRollupConfig, IS_PROD } from '../../build/create'
import pkg from './package.json'

const name = 'grind'

const configList = []

const esmConf = createRollupConfig({
  output: {
    file: pkg.module,
    format: 'esm',
    name,
  },
})
configList.push(esmConf)

if (IS_PROD) {
  // umd
  const umdConf = createRollupConfig({
    output: {
      file: pkg.main,
      format: 'umd',
      name,
    },
  })
  configList.push(umdConf)
}

export default configList

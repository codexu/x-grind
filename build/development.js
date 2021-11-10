import commonConfig from './common'

const { input, output = {}, plugins = [], external } = commonConfig

export default {
  input,
  output,
  external,
  plugins: [
    ...plugins,
  ],
}

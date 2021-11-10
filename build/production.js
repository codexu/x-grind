import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import cleanup from 'rollup-plugin-cleanup';
import commonConfig, { extensions } from './common';

const { input, output = {}, plugins = [], external } = commonConfig;

const mergePlugins = [
  ...plugins,
  babel({
    rootMode: 'upward',
    babelHelpers: 'runtime',
    exclude: 'node_modules/**',
    include: 'src/**',
    extensions,
  }),
  // 清空注释、修剪尾随空格、压缩空行和规范化行尾。
  cleanup({
    comments: 'none',
    extensions: ['.ts', '.tsx'],
  }),
  // 压缩 js
  terser(),
]

export default {
  input,
  output: {
    sourcemap: true,
    ...output,
  },
  external,
  plugins: mergePlugins,
}

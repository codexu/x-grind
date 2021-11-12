import path from 'path';
import typescriptPlugin from 'rollup-plugin-typescript2';
import commonjsPlugin from '@rollup/plugin-commonjs'
import jsonPlugin from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import deletePlugin from 'rollup-plugin-delete';
import vuePlugin from 'rollup-plugin-vue';

export const extensions = ['.js', '.jsx', '.ts', '.tsx', '.vue']

export default {
  input: path.resolve(__dirname, './src/index.ts'),
  output: {},
  plugins: [
    deletePlugin({ targets: 'dist/*' }),
    jsonPlugin({
      compact: true,
      indent: '  ',
      preferConst: true,
    }),
    typescriptPlugin({
      clean: true,
      tsconfig: path.resolve(__dirname, './tsconfig.json'),
    }),
    nodeResolve({
      browser: true, // 重要
      extensions,
    }),
    vuePlugin({ target: 'browser' }),
    commonjsPlugin(),
  ],
  external: ['react', 'react-dom', 'vue'],
}

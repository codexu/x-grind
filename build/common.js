import path from 'path';
import typescriptPlugin from 'rollup-plugin-typescript2';
import commonjsPlugin from '@rollup/plugin-commonjs'
import jsonPlugin from '@rollup/plugin-json';
import deletePlugin from 'rollup-plugin-delete';

export const extensions = ['.js', '.jsx', '.ts', '.tsx', '.vue']

export default {
  input: path.resolve(__dirname, './src/index.ts'),
  output: {},
  plugins: [
    commonjsPlugin(),
    typescriptPlugin({
      clean: true,
      tsconfig: path.resolve(__dirname, './tsconfig.json'),
      tsconfigOverride: { compilerOptions : { module: "es2015" } }
    }),
    jsonPlugin({
      compact: true,
      indent: '  ',
      preferConst: true,
    }),
    deletePlugin({ targets: 'dist/*' }),
  ],
  external: ['react', 'react-dom', 'vue'],
}

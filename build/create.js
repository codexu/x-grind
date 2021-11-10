import { merge } from 'lodash'
import developmentConfig from './development';
import productionConfig from './production';

// 环境变量
const ENV = process.env.NODE_ENV || 'production'
export const IS_DEV = ENV.indexOf('development') >= 0
export const IS_PROD = ENV.indexOf('production') >= 0

// 生成 rollup.config.js
export function createRollupConfig(customConfig = {}) {
  const { input, output = {}, plugins = [] } = customConfig

  const baseConfig = IS_PROD ? productionConfig : developmentConfig;

  const config = {
    input: input || baseConfig.input,
    output,
    plugins,
  }

  return merge({}, baseConfig, config);
}

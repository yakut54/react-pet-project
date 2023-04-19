import webpack from 'webpack'
import { BuildOptions } from './types/config'

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  return {
    alias: {},
    mainFiles: ['index'],
    preferAbsolute: true,
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['node_modules', options.paths.src],
  }
}

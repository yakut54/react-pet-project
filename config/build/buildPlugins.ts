import webpack from 'webpack'
import {BuildOptions} from './types/config'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
  const {paths} = options

  return [
    new HtmlWebpackPlugin({
      template: paths.html,
      title: 'TRY 3'
    }),
    new webpack.ProgressPlugin()
  ]
}
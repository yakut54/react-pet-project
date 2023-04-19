import webpack from 'webpack'
import {BuildOptions} from './types/config'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
// @ts-ignore
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    }),
    new HtmlWebpackPlugin({
      template: paths.html,
      title: 'TRY 3'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css',
    })
  ]

  if (isDev) {
    plugins.push(...[
      new webpack.HotModuleReplacementPlugin(),
      new ReactRefreshPlugin({ overlay: false }),
      new BundleAnalyzerPlugin({
        analyzerPort: 5001,
        openAnalyzer: false,
      }),
    ])
  }

  return plugins
}
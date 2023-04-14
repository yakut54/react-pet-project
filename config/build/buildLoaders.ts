import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {BuildOptions} from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resourcePath: string) => Boolean(resourcePath
              .includes('.module.')),
            localIdentName: isDev
              ? '[local]--[hash:base64:5]'
              : '[hash:base64:5]',
          }
        }
      },
      'sass-loader'
    ]
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  return [
    typescriptLoader,
    scssLoader
  ]
}
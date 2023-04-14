import {BuildOptions} from './types/config'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
export function buildDevServer({ PORT }: BuildOptions): DevServerConfiguration {

  return {
    port: PORT,
    open: true
  }
}
import debug from 'debug'

import {
  join,
  resolve
} from 'path'

import {
  hasSourcePath,
  getSourcePath,
  hasPublicPath,
  getPublicPath
} from '~/source/build/args/views'

const log = debug('@sequencemedia:source:build:paths:views')

log('`source:build:paths:views` is awake')

export const currentDir = process.cwd()

const SOURCE_PATH = join(currentDir, 'source/views')

const PUBLIC_PATH = join(currentDir, 'public')

export const sourcePath = resolve(hasSourcePath() ? getSourcePath() : SOURCE_PATH)

export const publicPath = resolve(hasPublicPath() ? getPublicPath() : PUBLIC_PATH)

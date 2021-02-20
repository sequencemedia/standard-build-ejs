import 'dotenv/config'

import debug from 'debug'

import MAP from '~/source/build/args/map'

const {
  env: ENV
} = process

const log = debug('@sequencemedia:source:build:args:views')

log('`source:build:args:views` is awake')

export const hasSourcePathArg = (map = MAP) => map.has('sourceViews')

export const getSourcePathArg = (map = MAP) => map.get('sourceViews')

export const hasPublicPathArg = (map = MAP) => map.has('publicViews')

export const getPublicPathArg = (map = MAP) => map.get('publicViews')

export const hasSourcePathEnv = (env = ENV) => Reflect.has(env, 'SOURCE_VIEWS')

export const getSourcePathEnv = (env = ENV) => Reflect.get(env, 'SOURCE_VIEWS')

export const hasPublicPathEnv = (env = ENV) => Reflect.has(env, 'PUBLIC_VIEWS')

export const getPublicPathEnv = (env = ENV) => Reflect.get(env, 'PUBLIC_VIEWS')

export const hasSourcePath = (map = MAP, env = ENV) => hasSourcePathArg(map) || hasSourcePathEnv(env)

export const getSourcePath = (map = MAP, env = ENV) => hasSourcePathArg(map) ? getSourcePathArg(map) : hasSourcePathEnv(env) ? getSourcePathEnv(env) : undefined

export const hasPublicPath = (map = MAP, env = ENV) => hasPublicPathArg(map) || hasPublicPathEnv(env)

export const getPublicPath = (map = MAP, env = ENV) => hasPublicPathArg(map) ? getPublicPathArg(map) : hasPublicPathEnv(env) ? getPublicPathEnv(env) : undefined

import debug from 'debug'

import {
  join
} from 'path'

import glob from 'glob-all'

import {
  readFile,
  writeFile
} from 'fs/promises'

import {
  publicPath
} from '~/source/build/paths/views'

import {
  getPackage,
  getPackageVersion
} from '~/source/build/args'

const log = debug('@sequencemedia:source:transform')

log('`transform` is awake')

const PACKAGE = getPackage()
const VERSION = getPackageVersion(PACKAGE)

const JAVASCRIPTS = /(assets\/js\/.*-)\d+\.\d+\.\d+(.js)/g
const STYLESHEETS = /(assets\/css\/.*-)\d+\.\d+\.\d+(.css)/g

const getFileData = async (filePath) => readFile(filePath, 'utf8')
const setFileData = async (filePath, fileData) => writeFile(filePath, fileData, 'utf8')

const getFilePathList = () => new Promise((resolve, reject) => glob([join(publicPath, '*.html'), join(publicPath, '**/*/*.html')], (e, a) => !e ? resolve(a) : reject(e)))
const setFilePathList = (filePathList, version) => Promise.all(filePathList.map(async (filePath) => setFileData(filePath, (await getFileData(filePath)).replace(JAVASCRIPTS, `$1${version}$2`).replace(STYLESHEETS, `$1${version}$2`))))

export default async function transform () {
  log('transform')

  const filePathList = await getFilePathList()

  return setFilePathList(filePathList, VERSION)
}

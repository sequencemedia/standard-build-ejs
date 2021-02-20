import path from 'path'
import gulp from 'gulp'
import rename from 'gulp-rename'
import debug from 'gulp-debug'
import vinylPaths from 'vinyl-paths'
import del from 'del'

import {
  currentDir,
  sourcePath,
  publicPath
} from './paths/views'

import handleError from './handle-error'

export function cleanHtml () {
  return (
    gulp.src(path.join(publicPath, '**/*.html'), { read: false })
      .pipe(vinylPaths((paths) => del(paths, { force: true })))
  )
}

export function html () {
  return (
    gulp.src([path.join(sourcePath, '**/*.ejs'), `!${path.join(sourcePath, 'partials/**/*.ejs')}`])
      .pipe(rename({ extname: '.html' }))
      .pipe(gulp.dest(publicPath))
      .pipe(debug({ title: 'Html' }))
  )
}

export function watchHtml () {
  return (
    gulp.watch(
      path.join(sourcePath, '**/*.*'),
      {
        name: 'html-watch',
        cwd: currentDir
      },
      gulp.series(cleanHtml, html)
    )
      .on('error', handleError)
  )
}

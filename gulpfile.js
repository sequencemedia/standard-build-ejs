require('module-alias/register')
require('@babel/register')

const gulp = require('gulp')

const {
  cleanHtml,
  html,
  watchHtml
} = require('~/source/build')

const {
  default: transform
} = require('~/source/transform')

gulp
  .task('clean:html', cleanHtml)

gulp
  .task('build:html', gulp.series('clean:html', html))

gulp
  .task('watch:html', gulp.series('build:html', watchHtml))

gulp
  .task('clean', gulp.series('clean:html'))

gulp
  .task('build', gulp.series('build:html'))

gulp
  .task('watch', gulp.parallel('watch:html'))

gulp
  .task('transform', transform)

gulp
  .task('default', gulp.series('build'))

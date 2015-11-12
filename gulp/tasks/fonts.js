/**
 * task for copy fonts
 */

var config = require('../config.json');
var $ = require('gulp-load-plugins')();
var gulp = require('gulp');

gulp.task('fonts', function () {
  return gulp.src([config.fonts + '**/*'])
    .pipe($.size({ title: 'fonts', gzip: false, showFiles: true }))
    .pipe(gulp.dest(config.dest.fonts));
});
/*
 * gulp sass
 */

var config = require('../config.json');
var $ = require('gulp-load-plugins')();
var gulp = require('gulp');

gulp.task('sass', function () {
  return $.rubySass(config.sass + 'main.scss', {
      "compass": true,
      "precision": 6,
      "stopOnError": false,
      "sourcemap=none": true
    })
    .on('error', $.rubySass.logError)
    .pipe($.plumber())
    .pipe($.autoprefixer({
      browsers: config.autoprefixer_browsers
    }))
    .pipe($.combineMediaQueries())
    .pipe($.size({ title: 'Styles', gzip: false, showFiles: true }))
    // .pipe(gulp.dest(config.dest.css))
    .pipe($.minifyCss({
      processImport: false
    }))
    // .pipe($.rename({suffix: '.min'}))
    .pipe($.size({ title: 'Styles', gzip: false, showFiles: true }))
    .pipe(gulp.dest(config.dest.css))
    .pipe($.plumber.stop());
});
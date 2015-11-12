/*
 * gulp serve
 */

var config = require('../config.json');
var bSync = require('browser-sync');
var gulp = require('gulp');

gulp.task('serve', function () {
  // watch sass files
  gulp.watch(config.sass + '**/*.scss', ['sass']);

  // watch js files
  gulp.watch(config.js + '**/*.js', ['lint', 'js']);

  bSync.init({
    notify: false,
    open: "external",
    logPrefix: 'browser-sync',
    server: config.site
  });

  gulp.watch(config.site + '**/*.{html,css,js}').on('change', bSync.reload);
});
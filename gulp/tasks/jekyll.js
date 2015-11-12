/*
 * gulp jekyll
 */

var cp   = require('child_process');
var gulp = require('gulp');

gulp.task('jekyll', function (done) {
  return cp.spawn('bundle', ['exec', 'jekyll', 'build', '--watch'], { stdio: 'inherit' })
  .on('close', done);
});
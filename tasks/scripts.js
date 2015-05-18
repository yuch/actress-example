var gulp = require('gulp');
var del = require('del');
var scriptsBuilder = require('./helpers/scriptsBuilder');
var config = require('./config/scripts');

/**
 * Compile js files
 *
 * Options:
 *   --production: Optimize final js.
 */
gulp.task('scripts', function (done) {
  scriptsBuilder(done);
});

/**
 * Compile js files with watch mode.
 */
gulp.task('scripts:watch', ['scripts'], function () {
  gulp.watch(config.watchFiles, ['scripts']);
});

/**
 * Clean up js files generated by gulp.
 */
gulp.task('scripts:clean', function (done) {
  del([config.dest + '*.js'], done);
});

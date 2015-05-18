var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var stylesBuilder = require('../helpers/stylesBuilder');
var scriptsBuilder = require('../helpers/scriptsBuilder');
var stylesConfig = require('../config/styles');
var scriptsConfig = require('../config/scripts');

/**
 * Compile less files.
 */
gulp.task('serve:styles', function () {
  return stylesBuilder(reload);
});

/**
 * Compile js files.
 */
gulp.task('serve:scripts', function (done) {
  scriptsBuilder(done, reload);
});

/*
 * Serve proxy server for live reload environment.
 *
 * Remember that application must be running prior to this task. It should be
 * the Homestead VM but if you're using something else, boot it up before using
 * this command.
 */
gulp.task('serve', ['serve:styles', 'serve:scripts'], function () {
  browserSync.init({
    proxy: 'http://localhost:5000',
    browser: 'google chrome',
    notify: false
  });

  gulp.watch(stylesConfig.watchFiles, ['serve:styles']);
  gulp.watch(scriptsConfig.watchFiles, ['serve:scripts']);

});

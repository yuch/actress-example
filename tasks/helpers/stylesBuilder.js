var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var swallowError = require('./swallow-error');
var config = require('../config/styles');

/**
 * Build LESS files.
 *
 * If Browsersync reload is passed, it will execute it.
 *
 * @param  {Browserify.reload} reload
 * @return {stream}
 */
var stylesBuilder = function(reload) {
  return gulp.src(config.entries)
    .pipe($.less().on('error', swallowError))
    .pipe($.autoprefixer({ browsers: ['last 1 versions'] }))
    .pipe($.util.env.production ? $.csso() : $.util.noop())
    .pipe(gulp.dest(config.dest))
    .pipe(reload ? reload({ stream: true }) : $.util.noop());
};

module.exports = stylesBuilder;

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var path = require('path');
var _ = require('lodash');
var webpack = require('webpack');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var swallowError = require('../helpers/swallow-error');
var config = require('../config/scripts');

/**
 * Compile less files.
 */
gulp.task('serve:styles', function () {
  return gulp.src('./less/main.less')
    .pipe($.less().on('error', swallowError))
    .pipe($.autoprefixer({ browsers: ['last 1 versions'] }))
    .pipe(gulp.dest('./public/css'))
    .pipe(reload({ stream: true }));
});

/**
 * Webpack base configuration.
 *
 * @type {Object}
 */
var baseConfig = {
  cache: true,
  debug: true,
  entry: {
    'main': path.join(__dirname, '/../../scripts/main')
  },
  output: {
    path: path.join(__dirname, '/../../public/js'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?stage=0' }
    ]
  }
};

/**
 * create a single instance of the compiler to allow caching.
 *
 * @type {Webpack}
 */
var compiler = webpack(baseConfig);

/**
 * Compile js files.
 */
gulp.task('serve:scripts', function (done) {
  webpack(config.baseConfig).run(function (err, stats) {
    if (err) {
      throw new $.util.PluginError('scripts', err);
    }

    done();

    reload();
  });
});

/**
 * Serve proxy server for live reload environment.
 */
gulp.task('serve', ['styles', 'scripts'], function () {
  browserSync.init({
    server: { baseDir: './public' },
    browser: 'google chrome',
    notify: false
  });

  gulp.watch(['./less/**/*.less'], ['serve:styles']);
  gulp.watch(['./scripts/**/*.js'], ['serve:scripts']);
  gulp.watch(['./public/**/*.html'], reload);
});

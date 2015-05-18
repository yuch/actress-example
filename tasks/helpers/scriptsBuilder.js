var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var path = require('path');
var _ = require('lodash');
var webpack = require('webpack');
var swallowError = require('./swallow-error');
var config = require('../config/scripts');

var compiler = $.util.env.production ? webpack(_.extend(config.base, config.production))
                                     : webpack(config.base);

/**
 * Compiles JS files.
 *
 * @param  {Function} done
 * @param  {Browsersync.reload} reload
 * @return {void}
 */
var scriptsBuilder = function(done, reload) {
  compiler.run(function (err, stats) {
    if (err) {
      throw new $.util.PluginError('scripts', err);
    }

    if ( ! reload) {
      $.util.log('[scripts]', stats.toString({ colors: true }));
    }

    done();

    if (reload) {
      reload();
    }
  });
}

module.exports = scriptsBuilder;

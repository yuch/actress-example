var path = require('path');
var webpack = require('webpack');

var rootPath = path.join(__dirname, '../../');
var src = path.join(rootPath, 'scripts/');
var dest = path.join(rootPath, 'public/js/');

module.exports = {

  src: src,
  dest: dest,

  watchFiles: [path.join(src, '**/*.js')],

  // Base configurations.
  base: {
    cache: true,
    debug: true,

    entry: {
      'main': path.join(src, 'main'),
      'ja': path.join(src, 'lang/ja'),
      'en': path.join(src, 'lang/en'),
    },
    output: {
      path: dest,
      filename: '[name].js'
    },

    resolve: {
      alias: {
        app: src,
      }
    },

    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?stage=0' }
      ]
    }
  },

  // Production only configurations. This setting will override base settings.
  production: {
    cache: false,
    debug: false,

    plugins: [
      new webpack.DefinePlugin({
        // This has effect on the react lib size.
        'process.env': { 'NODE_ENV': JSON.stringify('production') }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin()
    ]
  }

};

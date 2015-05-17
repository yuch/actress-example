var path = require('path');
var webpack = require('webpack');

var srcPath = path.join(__dirname, '/../../scripts/');
var destPath = path.join(__dirname, '/../../public/js/');

var config = {

  baseConfig: {
    cache: true,
    debug: true,
    entry: {
      'main': path.join(srcPath, 'main')
    },
    output: {
      path: path.join(destPath),
      filename: '[name].js'
    },
    resolve: {
      alias: {
        app: srcPath
      }
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?stage=0' }
      ]
    }
  },

  productionConfig: {
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

module.exports = config;

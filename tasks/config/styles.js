var path = require('path');

var rootPath = path.join(__dirname, '../../');
var src = path.join(rootPath, 'less/');
var dest = path.join(rootPath, 'public/css/');

module.exports = {

  src: src,
  dest: dest,

  entries: [
    path.join(src, 'main.less')
  ],

  watchFiles: [path.join(src, '**/*.less')]

};

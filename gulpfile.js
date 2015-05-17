/*
|--------------------------------------------------------------------------
| Bootstrap Gulp Tasks and Declare Default Task
|--------------------------------------------------------------------------
|
| Here we bootstrap gulp task and declare default gulp task. Every other tasks
| should be placed in `tasks` folder and it will be loaded automatically.
|
*/

var gulp = require('gulp');
var util = require('gulp-util');
var requireDir = require('require-dir');

// Load tasks from tasks directory.
requireDir('./tasks', { recurse: util.env.production ? false : true });

/**
 * Default task. It's an alias for `serve`.
 */
gulp.task('default', ['serve']);

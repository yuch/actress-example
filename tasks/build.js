var gulp = require('gulp');

/**
 * Build css and js.
 *
 * Options:
 *   --production: Optimize output file.
 */
gulp.task('build', ['styles', 'scripts']);

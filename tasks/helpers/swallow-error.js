/**
 * Prevent gulp watch to be stopped on errors.
 *
 * @param {Object} error
 */
var swallowError = function (error) {
  console.log(error.toString());
  this.emit('end');
};

module.exports = swallowError;

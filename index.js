var contains = require('contains')

/**
 * Returns a new array with elements filtered by uniqueness
 *
 * @param {Array|Object} arr
 */
module.exports = function (arr) {
  var el
    , result = []

  for (var i = 0, len = arr.length; i < len; ++i) {
    el = arr[i]

    if (!contains(el, result)) {
      result.push(el)
    }
  }

  return result
}
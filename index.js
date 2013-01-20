var contains = require('contains')

/**
 * Returns a new array with elements filtered by uniqueness
 *
 * @param {Array} arr
 * @return {Array}
 */

module.exports = function (arr) {
  var result = []
    , len = arr.length

  if (!len) return result
  result.push(arr[0])

  for (var i = 1; i < len; ++i) {
    var el = arr[i]

    if (!contains(el, result)) {
      result.push(el)
    }
  }

  return result
}
var vdom = require('virtual-dom')
var hyperx = require('hyperx')
var hx = hyperx(vdom.h)
var runtime = require('atlatl/code/runtime.js')

function template (strings) {
  var args = new Array(arguments.length)
  var i, j

  for (i = 1, j = 0; i < args.length; ++i, ++j) {
    args[j] = arguments[i]
  }

  args = runtime.values(args)

  args.unshift(strings)

  return hx.apply(null, args)
}

template.safe = runtime.safe

template.values = runtime.values

module.exports = template

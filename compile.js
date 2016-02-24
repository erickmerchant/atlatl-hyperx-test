var atlatl = require('atlatl')
var templates = atlatl({
  cacheDirectory: './',
  runtimePath: './runtime.js'
})

templates('./template.html')
.then(function (template) {
  console.log('done')
})
.catch(function (e) {
  console.error(e)
})

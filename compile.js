var atlatl = require('atlatl')
var templates = atlatl({
  cacheDirectory: './'
})

templates('./template.html')
.then(function (template) {
  console.log('done')
})
.catch(function (e) {
  console.error(e)
})

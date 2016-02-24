var Template = require('./template.html.js')
var main = require('main-loop')
var bean = require('bean')
var content = {
  times: 0,
  collection: []
}
var loop = main(content, render, {
  document: document,
  create: require('virtual-dom/create-element'),
  diff: require('virtual-dom/diff'),
  patch: require('virtual-dom/patch')
})
var $main = document.querySelector('main')

$main.appendChild(loop.target)

bean.on($main, 'click', 'button', function () {
  content.times += 1

  content.collection.push(Math.random())

  loop.update(content)
})

function render (content) {
  return (new Template()).render(content)
}

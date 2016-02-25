var Template = require('./template.html.js')
var main = require('main-loop')
var content = {
  times: 0,
  collection: [],
  increment: function () {
    content.times += 1

    content.collection.push(Math.random())

    loop.update(content)
  }
}
var loop = main(content, render, {
  document: document,
  create: require('virtual-dom/create-element'),
  diff: require('virtual-dom/diff'),
  patch: require('virtual-dom/patch')
})

document.querySelector('main').appendChild(loop.target)

function render (content) {
  return (new Template()).render(content)
}

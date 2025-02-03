const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItDefList = require('markdown-it-deflist');
const markdownItClass = require('@toycode/markdown-it-class');
const markdownItTocDoneRight = require('markdown-it-toc-done-right')
const markdownItImplicitFigures = require('markdown-it-implicit-figures');
const markdownItExpandible = require('markdown-it-expandable');
const markdownItSup = require('markdown-it-sup');
const markdownItHeaderSections = require('markdown-it-header-sections');

const markdownLib = markdownIt({
  // Use of HTML tags in Markdown
  html: true,
  // Conversion of \n to <br>
  breaks: false,
  // Automatically hyperlinking inline links
  linkify: true,
  // Renders typography
  typographer: true
})
.use(markdownItHeaderSections)
.use(markdownItAttrs)
.use(markdownItDefList)
.use(markdownItClass)
.use(markdownItTocDoneRight, {
  placeholder: `{:toc}`, // same as Jekyll
  containerId: 'toc',
  listClass: 'toc-list',
  itemClass: 'toc-item',
  linkClass: 'toc-link',
  listType: 'ol',
})
.use(markdownItImplicitFigures)
.use(markdownItExpandible)
.use(markdownItSup);

module.exports = markdownLib;
const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItDefList = require('markdown-it-deflist');
const markdownItHeaderSections = require('markdown-it-header-sections');

const markdownLib = markdownIt({
  // Use of HTML tags in Markdown
  html: true,
  // Conversion of \n to <br>
  breaks: false,
  // Automatically hyperlinking inline links
  linkify: true,
  // Renders typography
  typographer: false
})
.use(markdownItHeaderSections)
.use(markdownItAttrs)
.use(markdownItDefList)

module.exports = markdownLib;
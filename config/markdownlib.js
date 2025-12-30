const markdownIt = require('markdown-it');
const markdownItHeaderSections = require('markdown-it-header-sections');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItDefList = require('markdown-it-deflist');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItTaskList = require('markdown-it-task-lists');

module.exports = markdownIt({
  // Use of HTML tags in Markdown
  html: true,
  // Conversion of \n to <br>
  breaks: true,
  // Automatically hyperlinking inline links
  linkify: false,
  // Renders typography
  typographer: false
})
.use(markdownItAttrs)
.use(markdownItHeaderSections)
.use(markdownItAnchor)
.use(markdownItDefList)
.use(markdownItTaskList)
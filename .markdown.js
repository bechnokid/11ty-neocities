const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItDefList = require('markdown-it-deflist');

const markdownItConfig = {
  html: true,
  breaks: true,
  linkify: true,
};

const md = markdownIt(markdownItConfig)
  .use(markdownItDefList)
  .use(markdownItAttrs)

module.exports = md;
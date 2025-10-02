// CSV Parser
const { parse } = require('csv-parse/sync');
const csvParse = function(contents) {
  const records = parse(contents, {
    columns: true,
    skip_empty_lines: true,
    relax_column_count: true,
    delimiter: '|',
    trim: true,
    relax_quotes: true,
  });

  return records;
}

// HTML Minifier
const htmlMinifier = require("html-minifier-terser");
const htmlmin = function(content) {
  if ((this.page.outputPath || "").endsWith(".html")) {
    let minified = htmlMinifier.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
    });

    return minified;
  }

  // If not an HTML output, return content as-is
  return content;
}

// Markdown-it
const markdownIt = require('markdown-it');
const markdownItHeaderSections = require('markdown-it-header-sections');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItDefList = require('markdown-it-deflist');
const markdownItAnchor = require('markdown-it-anchor');

const markdownLib = markdownIt({
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

module.exports = {
  csvParse,
  htmlmin,
  markdownLib,
}
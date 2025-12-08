const htmlMinifier = require("html-minifier-terser");

module.exports = function(content) {
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
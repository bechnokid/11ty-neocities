const rssPlugin = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const brokenLinksPlugin = require("eleventy-plugin-broken-links");
const pluginTOC = require('eleventy-plugin-toc');
const lightningCSS = require('@11tyrocks/eleventy-plugin-lightningcss');

module.exports = [
  {
    name: rssPlugin,
  },
  {
    name: syntaxHighlight,
  },
  {
    name: pluginTOC,
    options: { tags: ['h2'] },
  },
  {
    name: brokenLinksPlugin,
    options: { loggingLevel: 1, pluginName: "brokenLinks" },
  },
  {
    name: lightningCSS,
    options: { pluginName: "lightning" }
  },
]
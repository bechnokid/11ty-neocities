const rssPlugin = require('@11ty/eleventy-plugin-rss');
const lightningCSS = require("@11tyrocks/eleventy-plugin-lightningcss");
const htmlmin = require("html-minifier-terser");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const brokenLinksPlugin = require("eleventy-plugin-broken-links");

const {
  cssmin,
  date,
  dayOfMonth,
  monthDayYear,
  monDayYear,
  w3DateFilter,
  markdownify,
  markdownifyInline,
  sortCollectionByDisplayOrder,
  toHtmlList,
  limit
} = require('./config/filters');

const {
  writingPages,
  blogPosts
} = require('./config/collections');

const {
  icon,
  img,
  imgWithLink,
  freezeframeButtons,
  figure,
  details,
  galleryBox
} = require('./config/shortcodes');

const markdownLib = require('./config/plugins/markdown');

const TEMPLATE_ENGINE = 'njk';

module.exports = async function(eleventyConfig){
  const { IdAttributePlugin } = await import("@11ty/eleventy");

  eleventyConfig.addPassthroughCopy('./src/assets/images/');
  eleventyConfig.addPassthroughCopy('./src/assets/fonts/');
  eleventyConfig.addPassthroughCopy('./src/assets/css/');
  eleventyConfig.addPassthroughCopy('./src/assets/javascript/');

  // Shortcodes
  eleventyConfig.addShortcode('icon', icon);
  eleventyConfig.addShortcode('img', img);
  eleventyConfig.addShortcode('imgWithLink', imgWithLink);
  eleventyConfig.addShortcode('freezeframeButtons', freezeframeButtons);

  // Paired shortcodes
  eleventyConfig.addPairedShortcode('figure', figure);
  eleventyConfig.addPairedShortcode('details', details);
  eleventyConfig.addPairedShortcode('galleryBox', galleryBox);

  // Transform
  eleventyConfig.addTransform("htmlmin", function (content) {
    if ((this.page.outputPath || "").endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });

      return minified;
    }

    // If not an HTML output, return content as-is
    return content;
  });

  // Filters
  eleventyConfig.addFilter('date', date);
  eleventyConfig.addFilter('dayOfMonth', dayOfMonth);
  eleventyConfig.addFilter('monthDayYear', monthDayYear);
  eleventyConfig.addFilter('monDayYear', monDayYear);
  eleventyConfig.addFilter('w3DateFilter', w3DateFilter);
  eleventyConfig.addFilter("markdownify", markdownify);
  eleventyConfig.addFilter("markdownifyInline", markdownifyInline);
  eleventyConfig.addFilter('sortCollectionByDisplayOrder', sortCollectionByDisplayOrder);
  eleventyConfig.addFilter('toHtmlList', toHtmlList);
  eleventyConfig.addNunjucksFilter('limit', limit);
  eleventyConfig.addFilter("cssmin", cssmin);

  // Collections
  eleventyConfig.addCollection('writing', writingPages);
  eleventyConfig.addCollection('blog', blogPosts);

  // Plugins
  eleventyConfig.addPlugin(rssPlugin);
  eleventyConfig.addPlugin(lightningCSS);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(IdAttributePlugin);
  //eleventyConfig.addPlugin(brokenLinksPlugin, { excludeUrls: ["https://deviantart.com/view/*", "https://www.youtube.com/watch?"] });

  eleventyConfig.setLibrary('md', markdownLib);

  return {
    markdownTemplateEngine: TEMPLATE_ENGINE,
    dataTemplateEngine: TEMPLATE_ENGINE,
    htmlTemplateEngine: TEMPLATE_ENGINE,
    dir: {
      input: 'src',
      output: 'public',
      includes: '_includes',
      assets: 'assets',
    }
  }
}
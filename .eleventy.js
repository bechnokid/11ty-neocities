const env = process.env.ELEVENTY_ENV;
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const brokenLinksPlugin = require("eleventy-plugin-broken-links");
const pluginTOC = require('eleventy-plugin-toc');

const {
  date, dayOfMonth, monthDayYear, monDayYear, w3DateFilter,
  markdownify, markdownifyInline, sortCollectionByDisplayOrder,
  limit, useCode, getPageLinks
} = require('./config/filters');

const {
  writingPages, blogPosts, galleries, artPages, statusCafeThemes,
  pocketBishies
} = require('./config/collections');

const {
  icon, emoticon, emote, img, link, imgWithLink,
  tooltip, figure, details, galleryBox, convertToHtml,
  convertToCode, artCaption
} = require('./config/shortcodes');

const markdownLib = require('./config/plugins/markdown');
const htmlmin = require('./config/plugins/htmlmin');

const TEMPLATE_ENGINE = 'njk';

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = async function(eleventyConfig){
  const { IdAttributePlugin } = await import("@11ty/eleventy");
  const assetsPath = './src/assets'

  eleventyConfig.addPassthroughCopy(`${assetsPath}/images/`);
  eleventyConfig.addPassthroughCopy(`${assetsPath}/fonts/`);
  eleventyConfig.addPassthroughCopy(`${assetsPath}/stylesheets/`);
  eleventyConfig.addPassthroughCopy(`${assetsPath}/javascript/`);

  // Ignores
  if (env === 'dev') {
    eleventyConfig.ignores.add('./src/artwork/')
    eleventyConfig.ignores.add('./src/artwork.html')
    eleventyConfig.ignores.add('./src/content/writing/blog/')
  }

  // Data Extensions

  // Shortcodes
  eleventyConfig.addShortcode('icon', icon);
  eleventyConfig.addShortcode('emoticon', emoticon);
  eleventyConfig.addShortcode('emote', emote);
  eleventyConfig.addShortcode('img', img);
  eleventyConfig.addShortcode('link', link);
  eleventyConfig.addShortcode('imgWithLink', imgWithLink);
  eleventyConfig.addShortcode('artCaption', artCaption);

  // Paired shortcodes
  eleventyConfig.addPairedShortcode('figure', figure);
  eleventyConfig.addPairedShortcode('tooltip', tooltip);
  eleventyConfig.addPairedShortcode('details', details);
  eleventyConfig.addPairedShortcode('galleryBox', galleryBox);
  eleventyConfig.addPairedShortcode('convertToHtml', convertToHtml);
  eleventyConfig.addPairedShortcode('convertToCode', convertToCode);

  // Transform
  eleventyConfig.addTransform("htmlmin", htmlmin);

  // Filters
  eleventyConfig.addFilter('date', date);
  eleventyConfig.addFilter('dayOfMonth', dayOfMonth);
  eleventyConfig.addFilter('monthDayYear', monthDayYear);
  eleventyConfig.addFilter('monDayYear', monDayYear);
  eleventyConfig.addFilter('w3DateFilter', w3DateFilter);
  eleventyConfig.addFilter("markdownify", markdownify);
  eleventyConfig.addFilter("markdownifyInline", markdownifyInline);
  eleventyConfig.addFilter('sortCollectionByDisplayOrder', sortCollectionByDisplayOrder);
  eleventyConfig.addFilter('getPageLinks', getPageLinks);
  eleventyConfig.addFilter('useCode', useCode);
  eleventyConfig.addNunjucksFilter('limit', limit);

  // Collections
  eleventyConfig.addCollection('writing', writingPages);
  eleventyConfig.addCollection('blog', blogPosts);
  eleventyConfig.addCollection('statusCafeThemes', statusCafeThemes);
  eleventyConfig.addCollection('pocketBishies', pocketBishies);
  if (env !== 'dev') eleventyConfig.addCollection('gallery', galleries);
  if (env !== 'dev') eleventyConfig.addCollection('artPages', artPages);

  // Plugins
  eleventyConfig.addPlugin(rssPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(IdAttributePlugin);
  eleventyConfig.addPlugin(pluginTOC, {
    tags: ['h2']
  });
  if (env === 'prod') eleventyConfig.addPlugin(brokenLinksPlugin, { loggingLevel: 1 });

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
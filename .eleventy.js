const env = process.env.ELEVENTY_ENV;
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const brokenLinksPlugin = require("eleventy-plugin-broken-links");
const pluginTOC = require('eleventy-plugin-toc');

const {
  local, dayOfMonth, monthDayYear, monDayYear, markdownify,
  markdownifyInline, sortCollectionByDisplayOrder, limit,
  getPageLinks
} = require('./config/filters');

const {
  blogPosts, artPages, pocketBishies, gallery,
} = require('./config/collections');

const {
  decoImg, icon, emoticon, emote, img, link, tooltip, figure,
  details, galleryBox, artCaption
} = require('./config/shortcodes');

const { markdownLib, htmlmin, csvParse } = require('./config/plugins/');

const TEMPLATE_ENGINE = 'njk';

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = async function(eleventyConfig){
  const { IdAttributePlugin, RenderPlugin } = await import("@11ty/eleventy");
  const { EleventyPluginCodeDemo } = await import('eleventy-plugin-code-demo');
  const assetsPath = './src/assets'

  eleventyConfig.addPassthroughCopy(`${assetsPath}/images/`);
  eleventyConfig.addPassthroughCopy(`${assetsPath}/fonts/`);
  eleventyConfig.addPassthroughCopy(`${assetsPath}/stylesheets/`);
  eleventyConfig.addPassthroughCopy(`${assetsPath}/javascript/`);

  // Data Extensions
  eleventyConfig.addDataExtension('csv', csvParse);

  // Shortcodes
  eleventyConfig.addShortcode('decoImg', decoImg);
  eleventyConfig.addShortcode('icon', icon);
  eleventyConfig.addShortcode('emoticon', emoticon);
  eleventyConfig.addShortcode('emote', emote);
  eleventyConfig.addShortcode('img', img);
  eleventyConfig.addShortcode('link', link);
  eleventyConfig.addShortcode('artCaption', artCaption);

  // Paired shortcodes
  eleventyConfig.addPairedShortcode('figure', figure);
  eleventyConfig.addPairedShortcode('tooltip', tooltip);
  eleventyConfig.addPairedShortcode('details', details);
  eleventyConfig.addPairedShortcode('galleryBox', galleryBox);

  // Transform
  eleventyConfig.addTransform("htmlmin", htmlmin);

  // Filters
  eleventyConfig.addFilter('local', local);
  eleventyConfig.addFilter('dayOfMonth', dayOfMonth);
  eleventyConfig.addFilter('monthDayYear', monthDayYear);
  eleventyConfig.addFilter('monDayYear', monDayYear);
  eleventyConfig.addFilter("markdownify", markdownify);
  eleventyConfig.addFilter("markdownifyInline", markdownifyInline);
  eleventyConfig.addFilter('sortCollectionByDisplayOrder', sortCollectionByDisplayOrder);
  eleventyConfig.addFilter('getPageLinks', getPageLinks);
  eleventyConfig.addNunjucksFilter('limit', limit);

  // Collections
  eleventyConfig.addCollection('blog', blogPosts);
  eleventyConfig.addCollection('pocketBishies', pocketBishies);
  eleventyConfig.addCollection('gallery', gallery);
  eleventyConfig.addCollection('artPages', artPages);

  // Plugins
  eleventyConfig.addPlugin(rssPlugin);
  eleventyConfig.addPlugin(RenderPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(IdAttributePlugin, {
    filter: function({ page }) {
      const pageUrl = page.inputPath;
      if (pageUrl.includes('now') && !pageUrl.endsWith("index.html")) {
        return false;
      }
    }
  });
  eleventyConfig.addPlugin(pluginTOC, { tags: ['h2'] });
  eleventyConfig.addPlugin(EleventyPluginCodeDemo, {
    name: 'codeDemo',
    renderDocument: ({ html, css, js }) => `
    <!DOCTYPE html>
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>`,
    iframeAttributes: {
      style: 'width: 100%;',
      frameborder: '0',
    }
  })
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
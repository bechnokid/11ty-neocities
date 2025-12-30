const env = process.env.ELEVENTY_ENV;

const collections = require('./config/collections.js');
const filters = require('./config/filters.js');
const plugins = require('./config/plugins.js');
const shortcodes = require('./config/shortcodes.js');
const pairedShortcodes = require('./config/shortcodesPaired.js');

const markdownLib = require('./config/markdownlib.js');
const htmlmin = require('./config/htmlmin.js');
const csvParse = require('./config/csvparse.js');

const TEMPLATE_ENGINE = 'njk';

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = async function(eleventyConfig){
  const { IdAttributePlugin, RenderPlugin } = await import("@11ty/eleventy");
  const { EleventyPluginCodeDemo } = await import('eleventy-plugin-code-demo');

  ['images', 'fonts', 'js'].forEach(path => {
    eleventyConfig.addPassthroughCopy(`./src/assets/${path}/`)
  })

  // Data Extensions
  eleventyConfig.addDataExtension('csv', csvParse);

  // Shortcodes
  for (key in shortcodes) {
    eleventyConfig.addShortcode(key, shortcodes[key])
  }

  // Paired shortcodes
  for (key in pairedShortcodes) {
    eleventyConfig.addPairedShortcode(key, pairedShortcodes[key])
  }

  // Transform
  eleventyConfig.addTransform("htmlmin", htmlmin);

  // Filters
  for (key in filters.base) {
    eleventyConfig.addFilter(key, filters.base[key])
  }
  for (key in filters.njk) {
    eleventyConfig.addNunjucksFilter(key, filters.njk[key])
  }

  // Collections
  for (key in collections) {
    eleventyConfig.addCollection(key, collections[key])
  }

  // Plugins
  plugins.forEach(plugin => {
    if (plugin.options && plugin.options.pluginName) {
      const pluginName = plugin.options.pluginName;
      if ((env === "checkLinks" && pluginName === "lightning") ||
        (env != "checkLinks" && pluginName === "brokenLinks")) {
        return;
      }
    }
    eleventyConfig.addPlugin(plugin.name, { ...plugin.options })
  })

  eleventyConfig.addPlugin(RenderPlugin);
  eleventyConfig.addPlugin(IdAttributePlugin, {
    filter: function({ page }) {
      const pageUrl = page.inputPath;
      if (pageUrl.includes('now') && !pageUrl.endsWith("index.html")) {
        return false;
      }
    }
  });
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
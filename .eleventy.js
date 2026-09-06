const env = process.env.ELEVENTY_ENV;
const slugify = require('slugify');

const collections = require('./config/collections.js');
const filters = require('./config/filters.js');
const plugins = require('./config/plugins.js');
const shortcodes = require('./config/shortcodes.js');
const pairedShortcodes = require('./config/shortcodesPaired.js');

const htmlMin =  require('html-minifier-next');
const markdownLib = require('./config/markdownlib.js');
const csvParse = require('./config/csvparse.js');

const TEMPLATE_ENGINE = 'njk';

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = async function(eleventyConfig){
  eleventyConfig.addPreprocessor("neocities", "*", (data, content) => {
    if (!data.neocities && env === "neocities") {
      return false;
    }
  });

  const { IdAttributePlugin, RenderPlugin } = await import("@11ty/eleventy");
  const { EleventyPluginCodeDemo } = await import('eleventy-plugin-code-demo');

  ['images', 'fonts', 'js'].forEach(path => {
    eleventyConfig.addPassthroughCopy(`./src/assets/${path}/`);
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

  /* galleryBox params:
    - children: content between {% galleryBox %} and {% endgalleryBox %}
    - id (str): sets "id" attribute
    - title (str): creates <h2> for title
      - subtitle (str): creates <h3> for subtitle
      - title and subtitle cannot both be present
    - cls (str): sets class for .sidebar
    - subCls (str): sets class for .content
    - simple (boolean): determines if gallery box will be simple or a flex box
    - markdown (boolean or object): determines if content will be in Markdown
      - inline (boolean): if markdown is object, this determines whether or not to add <p> tags
  */
  eleventyConfig.addPairedShortcode('galleryBox', function(children, params = {}) {
    let mainContent = children;
    const galleryId = (params.id) ? ` id="${params.id}"` : '';
    const title = (params.title) ? `<h2>${params.title}</h2>` : '';
    const subtitle = (params.subtitle) ? `<h3>${params.subtitle}</h3>` : '';

    if (title != "" && subtitle != "") return "<p>There cannot be both a title and a sub title.</p>";

    let mainClsArr = ['sidebar'];
    if (params.cls) mainClsArr.push(...params.cls.split(' '));
    if (params.title) mainClsArr.push(eleventyConfig.getFilter('slugify')(params.title));

    let subClsArr = (params.simple) ? [] : ['d-flex', 'flex-wrap']
    if (params.subCls) subClsArr.push(...params.subCls.split(' '));

    if (params.markdown) {
      mainContent = (params.markdown.inline) ? markdownLib.renderInline(children.trim()) : markdownLib.render(children.trim());
    }

    return `${subtitle}<div${galleryId} class='${mainClsArr.join(' ')}'>${title}<div class='content p-3 position-relative ${subClsArr.join(' ')}'>${mainContent}</div></div>`;
  })

  // Transform
  if (env === "prod" || env === "neocities" ) eleventyConfig.addTransform("html-minifier-next", async function(content) {
    if (this.page.outputPath && this.page.outputPath.endsWith('.html')) {
      let minified = await htmlMin.minify(content, {
        preset: 'comprehensive',
      });
      return minified;
    }
    return content;
  });

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
    slugify,
    selector: 'h2, h3, h4',
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

  eleventyConfig.addNunjucksGlobal("getContext", function(macroName, name, params) {
    let macroResults;
    if (macroName == 'pixelClub') {
      if (params.basic) {
        macroResults = this.ctx[macroName]['basic'](params);
      } else if (params.detailed) {
        macroResults = this.ctx[macroName]['detailed'](params);
      } else {
        macroResults = this.ctx[macroName][name](params);
      }
    };
    return macroResults;
  });

  eleventyConfig.setLibrary('md', markdownLib);

  const output_dir = (env === "neocities") ? "neocities" : "public";

  return {
    markdownTemplateEngine: TEMPLATE_ENGINE,
    dataTemplateEngine: TEMPLATE_ENGINE,
    htmlTemplateEngine: TEMPLATE_ENGINE,
    dir: {
      input: 'src',
      output: output_dir,
      includes: '_includes',
      assets: 'assets',
    }
  }
}
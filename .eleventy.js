const rssPlugin = require('@11ty/eleventy-plugin-rss');
const lightningCSS = require("@11tyrocks/eleventy-plugin-lightningcss");
const htmlmin = require("html-minifier-terser");

const {
  cssmin,
  date,
  dayOfMonth,
  monthDayYear,
  monDayYear,
  fromNow,
  w3DateFilter,
  markdownify,
  sortCollectionByDisplayOrder,
} = require('./config/filters');

const {
  getAllWritingPages,
  getAllBlogPosts,
  getGalleryImages
} = require('./config/collections');

const {
  simpleGallery,
  figure
} = require('./config/shortcodes');

const markdownLib = require('./config/plugins/markdown');

const TEMPLATE_ENGINE = 'njk';

module.exports = config => {
  config.addPassthroughCopy('./src/assets/images/');
  config.addPassthroughCopy('./src/assets/fonts/');
  config.addPassthroughCopy('./src/assets/css/');
  config.addPassthroughCopy('./src/assets/javascript/');

  // Shortcodes
  config.addShortcode('simpleGallery', simpleGallery);

  // Paired shortcodes
  config.addPairedShortcode('figure', figure);

  // Transform
  config.addTransform("htmlmin", function (content) {
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
  config.addFilter('date', date);
  config.addFilter('dayOfMonth', dayOfMonth);
  config.addFilter('monthDayYear', monthDayYear);
  config.addFilter('monDayYear', monDayYear);
  config.addFilter('fromNow', fromNow);
  config.addFilter('w3DateFilter', w3DateFilter);
  config.addFilter("markdownify", markdownify);
  config.addFilter('sortCollectionByDisplayOrder', sortCollectionByDisplayOrder);
  config.addFilter("cssmin", cssmin);

  // Collections
  config.addCollection('writing', getAllWritingPages);
  config.addCollection('blog', getAllBlogPosts);
  config.addCollection("galleryImages", getGalleryImages);

  // Plugins
  config.addPlugin(rssPlugin);
  config.addPlugin(lightningCSS);

  config.setLibrary('md', markdownLib);

  return {
    markdownTemplateEngine: TEMPLATE_ENGINE,
    dataTemplateEngine: TEMPLATE_ENGINE,
    htmlTemplateEngine: TEMPLATE_ENGINE,
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      assets: 'assets',
    }
  }
}
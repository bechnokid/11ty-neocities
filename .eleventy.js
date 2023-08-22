const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');
const markdownIt = require('./.markdown.js');

module.exports = config => {
  config.setLibrary("md", markdownIt);

  config.addPassthroughCopy("./src/css/");
  config.addPassthroughCopy("./src/fonts/");
  config.addPassthroughCopy("./src/images/");

  config.addFilter('dateFilter', dateFilter);
  config.addFilter('w3DateFilter', w3DateFilter);
  config.addFilter("markdownify", (markdownString) =>
    markdownIt.render(markdownString)
  );

  config.addCollection('about', collection => {
    return sortByDisplayOrder(collection.getFilteredByGlob('./src/about/*'));
  });

  config.addCollection('blog', collection => {
    return [...collection.getFilteredByGlob('./src/blog/*')].reverse();
  });

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
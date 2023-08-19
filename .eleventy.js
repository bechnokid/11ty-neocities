module.exports = config => {
  const dateFilter = require('./src/filters/date-filter.js');
  const w3DateFilter = require('./src/filters/w3-date-filter.js');

  config.addPassthroughCopy("./src/css/");
  config.addPassthroughCopy("./src/fonts/");
  config.addPassthroughCopy("./src/images/");

  config.addFilter('dateFilter', dateFilter);
  config.addFilter('w3DateFilter', w3DateFilter);

  config.addCollection('blog', collection => {
    return [...collection.getFilteredByGlob('./src/blog/*.html')].reverse();
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
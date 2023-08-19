module.exports = config => {
  config.addPassthroughCopy("./src/css/");
  config.addPassthroughCopy("./src/fonts/");
  config.addPassthroughCopy("./src/images/");

  config.addCollection('blog', collection => {
    return [...collection.getFilteredByGlob('./src/writing/*.html')].reverse();
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
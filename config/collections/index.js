const writingPages = collection => {
  return collection.getFilteredByTag('writing');
}

const blogPosts = collection => {
  return collection.getFilteredByTag('blog').reverse();
}

const statusCafeThemes = collection => {
  return collection.getFilteredByTag('statusCafeTheme');
}

module.exports = {
  writingPages,
  blogPosts,
  statusCafeThemes
}
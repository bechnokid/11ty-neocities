const writingPages = collection => {
  return collection.getFilteredByTag("writing");
}

const blogPosts = collection => {
  return collection.getFilteredByTag('blog').reverse();
}

module.exports = {
  writingPages,
  blogPosts
}
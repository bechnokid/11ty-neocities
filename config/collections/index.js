const writingPages = collection => {
  return collection.getFilteredByTag('writing');
}

const blogPosts = collection => {
  return collection.getFilteredByTag('blog').reverse();
}

const statusCafeThemes = collection => {
  return collection.getFilteredByTag('statusCafeTheme');
}

const artPages = collection => {
  let artPages = [];
  const galleries = Object.entries(collection.getAll()[0].data.art.galleries)

  for (let [key, items] of galleries) {
    items.forEach((currentImg, i, arr) => {
      currentImg.gallery = key;
      currentImg.baseUrl = `/assets/images/art/${key}/`;
      if (i) currentImg.prevImg = arr[i - 1].title;
      if (i + 1 != arr.length) currentImg.nextImg = arr[i + 1].title;
      artPages.push(currentImg);
    });
  };
  return artPages;
}

const pocketBishies = collection => {
  const bishieCollection = collection.getAll()[0].data.goodies.pocket_bishies.custom
  return Object.values(bishieCollection).flat();
}

module.exports = {
  writingPages,
  blogPosts,
  statusCafeThemes,
  artPages,
  pocketBishies,
}
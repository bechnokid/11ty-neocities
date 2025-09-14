const writingPages = collection => {
  return collection.getFilteredByTag('writing');
}

const blogPosts = collection => {
  return collection.getFilteredByTag('blog').reverse();
}

const statusCafeThemes = collection => {
  return collection.getFilteredByTag('statusCafeTheme');
}

const galleries = collection => {
  return Object.values(collection.getAll()[0].data.art);
}

const artPages = collection => {
  let artPages = [];

  galleries(collection).forEach((gallery) => {
    gallery.items.forEach((picture, i, arr) => {
      const title = gallery.shortTitle || gallery.title;
      picture.containingGallery = `${title}`;
      picture.baseUrl = `/assets/images/art/${title.toLowerCase()}`;
      if (i) picture.previousImage = arr[i - 1].title;
      if (i + 1 != arr.length) picture.nextImage = arr[i + 1].title;
      artPages.push(picture);
    });
  });
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
  galleries,
  artPages,
  pocketBishies,
}
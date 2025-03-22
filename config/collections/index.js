const writingPages = collection => {
  return collection.getFilteredByTag("writing");
}

const blogPosts = collection => {
  return collection.getFilteredByTag('blog').reverse();
}

const galleryImages = collection => {
  const galleries = collection.getAll()[0].data.galleries.data;
  let galleryImages = [];

  galleries.forEach((gallery) => {
    gallery.pictures.forEach((picture, i, arr) => {
      picture.containingGallery = `${gallery.title}`;
      picture.baseUrl = `${gallery.imgPath}`;
      i ? (picture.previousImage = arr[i - 1].title) : null;
      i + 1 != arr.length ? (picture.nextImage = arr[i + 1].title) : null;
      galleryImages.push(picture);
    });
  });
  return galleryImages;
}

module.exports = {
  writingPages,
  blogPosts,
  galleryImages
}
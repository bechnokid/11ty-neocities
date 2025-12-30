const env = process.env.ELEVENTY_ENV

const gallery = collection => {
  const galleryData = collection.getAll()[0].data.art.data;
  return (env === "dev") ? Array(galleryData[0]) : galleryData;
}

const artPages = collection => {
  let artPages = [];
  const galleries = collection.getAll()[0].data.art.galleries;

  if (env === "dev") {
    const key = "digimon"
    const artData = galleries[key];
    artData.forEach((currentImg, i, arr) => {
      artPages.push(setCurrentImg(currentImg, i, arr, key));
    })
  } else {
    for (let [key, items] of Object.entries(galleries)) {
      items.forEach((currentImg, i, arr) => {
        artPages.push(setCurrentImg(currentImg, i, arr, key));
      });
    };
  }
  return artPages;
}

function setCurrentImg(currentImg, i, arr, key) {
  let resultImg = currentImg;
  resultImg.gallery = key;
  resultImg.baseUrl = `/assets/images/art/${key}/`;
  if (i) resultImg.prevImg = arr[i - 1].title;
  if (i + 1 != arr.length) resultImg.nextImg = arr[i + 1].title;
  return resultImg;
}

const pocketBishies = collection => {
  const bishieCollection = collection.getAll()[0].data.goodies.pocket_bishies.custom
  return Object.values(bishieCollection).flat();
}

module.exports = {
  gallery,
  artPages,
  pocketBishies,
}
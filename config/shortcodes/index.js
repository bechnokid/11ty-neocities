const markdownLib = require('../plugins/markdown');

const simpleGallery = function(src, collectionArr) {
  let galleryCode = ``;
  for (let item in collectionArr) {
    let imgSrc = src + item;
    let itemObj = collectionArr[item];
    let frzCls = (itemObj.freezeframe == true) ? "freezeframe" : "";

    let imgCode = [`<img class="${frzCls}" src="${imgSrc}" alt="${itemObj.alt}" loading="lazy">`];

    if (itemObj.url) {
      imgCode.unshift(`<a href='${itemObj.url}'>`);
      imgCode.push(`</a>`);
    }
    galleryCode += imgCode.join('');
  }

  return galleryCode;
}

const figure = function(children, src, options = {}) {
  const imgSrc = src.includes('http') ? src : (this.ctx.imgLink == null ? ('/assets/images/' + src) : (this.ctx.imgLink + src));
  let figureClass = '';
  let figureStyle = '';
  const caption = markdownLib.render(children.trim());

  let resultsArray = [`<figure`, `>`, `<figcaption>${caption}</figcaption></figure>`];
  if (options) {
    figureClass = (options.class) ? ` class='${options.class}'` : '';
    figureStyle = (options.style) ? ` style='${options.style}'` : '';

    resultsArray.splice(1, 0, figureClass, figureStyle)

    if (options.bg) {
      resultsArray.splice(4, 0, `<div class='figure-div' style='background-image: url(${imgSrc})'></div>`)
    } else {
      resultsArray.splice(4, 0, `<img src="${imgSrc}" alt="${options.alt}">`)
    }

    if (!options.noLink) {
      resultsArray.splice(4, 0, `<a href='${imgSrc}'>`)
      resultsArray.splice(6, 0, `</a>`)
    }
  }

  return resultsArray.join("");
}

module.exports = {
  simpleGallery,
  figure
}
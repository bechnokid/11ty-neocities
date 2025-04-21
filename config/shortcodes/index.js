const markdownLib = require('../plugins/markdown');

const freezeframeButtons = function(options = {}) {
  let resultsArray = [
    '<div',
      '>',
      `<button class='button play-gif me-1'>Play GIFs</button>`,
      `<button class='button stop-gif'>Stop GIFs</button>`,
    '</div>'
  ]
  if (options.cls) resultsArray.splice(1, 0, ` class='${options.cls}'`)
  return resultsArray.flat().join('')
}

const icon = function(value, options = {}) {
  let iconVal = `<i class='fa fa-${value}'></i>`;
  if (value == 'meat') {
    let iconArr = [`<img class='meat svg' src='/assets/images/meat.svg'`, `>`];
    if (options.alt) iconArr.splice(1, 0, ` alt='${options.alt}'`)
    iconVal = iconArr.flat().join('');
  }
  return iconVal;
}

const img = function(value, options = {}) {
  // <img src='' alt='' class=''>
  let resultsArray = [`<img src='${value}'`, `>`];
  if (options.alt) resultsArray.splice(resultsArray.length - 1, 0, ` alt='${options.alt}'`);
  if (options.cls) resultsArray.splice(resultsArray.length - 1, 0, ` class='${options.alt}'`);
  return resultsArray.flat().join('');
}

const imgWithLink = function(imgUrl, linkUrl, options = {}) {
  // <a href=''><img src='' alt='' class=''></a>
  // [![IMG_ALT_TEXT](IMG_SRC)](LINK)
  let resultsArray = [`<a href=${linkUrl}`, `>`, `<img src='${imgUrl}'`, `></a>`];
  if (options.markdown){
    resultsArray = [`[`,`![${options.alt}](${imgUrl})`, `](${linkUrl})`];
    if (options.imgCls !== undefined && options.imgCls.length > 0 ){
      resultsArray.splice(resultsArray.length - 1, 0, `{.${options.imgCls.split(' ').join(' .')}}`);
    }
    if (options.cls) resultsArray.push(`{.${options.cls.split(' ').join(' .')}}`);
  } else {
    if (options.cls) resultsArray.splice(1, 0, ` class='${options.cls}'`);
    if (options.imgCls) resultsArray.splice(resultsArray.length - 1, 0, ` class='${options.imgCls}'`);
    if (options.alt) resultsArray.splice(1, 0, ` alt='${options.alt}'`);
  }
  return resultsArray.flat().join('');
}

// Paired
const details = function (children, title = "", options = {}) {
  let resultsArray =  ['<details', '>', children, '</details>'];
  if (title != "") {
    let summaryArr = ['<summary', '>', `${title}</summary>`];
    if (options) {
      let summaryClass = (options.summaryClass) ? ` class='${options.summaryClass}'` : '';
      let summaryStyle = (options.summaryStyle) ? ` style='${options.summaryStyle}'` : '';
      summaryArr.splice(1, 0, summaryClass + summaryStyle);
    }
    resultsArray.splice(2, 0, summaryArr);
  }

  if (options) {
    let detailsClass = (options.class) ? ` class='${options.class}'` : '';
    let detailsStyle = (options.detailsStyle) ? ` style='${options.detailsStyle}'` : '';
    resultsArray.splice(1, 0, detailsClass + detailsStyle)

    if (options.open == true) resultsArray.splice(1, 0, ' open');
  }
  return resultsArray.flat().join('');
}

const figure = function(children, src, options = {}) {
  const imgSrc = src.includes('http') ? src : (this.ctx.imgLink == null ? ('/assets/images/' + src) : (this.ctx.imgLink + src));
  const caption = markdownLib.render(children.trim());

  let resultsArray = ['<figure', '>', '<figcaption', '>', `${caption}</figcaption></figure>`];
  if (options) {
    if (options.figCaptionCls) resultsArray.splice(3, 0, ` class='${options.figCaptionCls}'`);

    if (options.bg) {
      resultsArray.splice(2, 0, `<div class='figure-div' style='background-image: url(${imgSrc})'></div>`)
    } else {
      let imgArr = [
        `<img src="${imgSrc}"`,
        '>'
      ]
      if (options.imgCls) imgArr.splice(imgArr.length - 1, 0, ` class="${options.imgCls}"`)
      if (options.alt) imgArr.splice(imgArr.length - 1, 0, ` alt="${options.alt}"`)

      resultsArray.splice(2, 0, imgArr.flat().join(''))
    }

    if (options.noLink != true) {
      let imgLink = imgSrc;
      if (options.imgLink) imgLink = options.imgLink;

      resultsArray.splice(3, 0, `</a>`)
      resultsArray.splice(2, 0, `<a href='${imgLink}'>`)
    }

    let figureClass = (options.class) ? ` class='${options.class}'` : '';
    let figureStyle = (options.style) ? ` style='${options.style}'` : '';

    resultsArray.splice(1, 0, figureClass + figureStyle)
  }

  return resultsArray.join('');
}

const galleryBox = function(children, options = {}) {
  let mainContent = children;
  if (options.markdown){
    if (options.markdown.inline) {
      mainContent = markdownLib.renderInline(children.trim());
    } else {
      mainContent = markdownLib.render(children.trim());
    }
  }

  let resultsArray = ['<div class="sidebar', '"', '>', '<div class="content d-flex flex-wrap p-3', '"', '>', mainContent, '</div></div>'];

  if (options) {
    if (options.contentClass) resultsArray.splice(4, 0, " " + options.contentClass);
    if (options.boxTitle) resultsArray.splice(3, 0, `<h2>${options.boxTitle}</h2>`)
    if (options.sidebarClass) resultsArray.splice(1, 0, " " + options.sidebarClass);

    return resultsArray.flat().join('');
  }
}

module.exports = {
  icon,
  img,
  imgWithLink,
  freezeframeButtons,
  figure,
  details,
  galleryBox
}
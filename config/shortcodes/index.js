const markdownLib = require('../plugins/markdown');
const chars = require('../variables.js');

const icon = function (value, options = {}) {
  let iconCls = '';
  if (value == 'meat') {
    const iconAlt = (options.alt) ? ` alt="${options.alt}"` : '';
    if (options.cls) iconCls = ` class='${options.cls}'`;
    return `<img src='/assets/images/meat.png'${iconAlt}${iconCls}>`;
  } else {
    if (options.cls) iconCls = ` ${options.cls}`;
    return `<i class='ft-${value}${iconCls}'></i>`
  }
}

const emoticon = function (value) {
  return `<img class='emoticon' src='/assets/images/blog/emoticon/${value}.svg' aria-hidden='true' alt=''>`;
}

const emote = value => {
  return `<img class='inline-img' src='/assets/images/blog/emoticon/emote_${value}.png' aria-hidden='true' alt=''>`;
}

const link = function (url, content, options = {}) {
  let linkCls = '';
  const ariaDesc = (options.ariaDesc) ? ` aria-describedby="${options.ariaDesc}"` : '';
  if (options.markdown && ariaDesc == '') {
    if (options.cls) linkCls = `{${options.cls.split(' ').map((x) => `.${x}`).join(' ')}}`;
    return `[${content}](${url})${linkCls}`
  } else {
    if (options.cls) linkCls = ` class='${options.cls}'`;
    return `<a href='${url}'${linkCls}${ariaDesc}>${content}</a>`;
  }
}

const img = function (src, options = {}) {
  let clsArr = [];
  if (options.freezeframe) clsArr.push('freezeframe');

  let imgCls = "";
  let imgAlt = (options.alt) ? options.alt : "";
  const ariaDesc = (options.ariaDesc) ? ` aria-describedby="${options.ariaDesc}"` : '';

  if (options.markdown && ariaDesc == '') {
    if (options.cls) clsArr.push(options.cls.split(' '));
    if (clsArr.length > 0) imgCls = `{${clsArr.flat().map((x) => `.${x}`).join(' ')}}`;
    return `![${imgAlt}](${src})${imgCls}`;
  } else {
    if (options.cls) clsArr.push(options.cls.split(' '));
    if (clsArr.length > 0) imgCls = ` class='${clsArr.flat().join(' ')}'`
    return `<img src='${src}' alt="${imgAlt}"${imgCls}${ariaDesc}>`;
  }
}

const imgWithLink = function (src, url, options = {}) {
  let clsArr = [];
  if (options.freezeframe) clsArr.push('freezeframe');

  let imgCls = "";
  let imgAlt = (options.alt) ? options.alt : "";
  let linkCls = '';
  const ariaDesc = (options.ariaDesc) ? ` aria-describedby="${options.ariaDesc}"` : '';

  if (options.markdown && ariaDesc == '') {
    if (options.imgCls) clsArr.push(options.imgCls.split(' '));
    if (clsArr.length > 0) imgCls = `{${clsArr.flat().map((x) => `.${x}`).join(' ')}}`;
    if (options.linkCls) linkCls = `{${options.linkCls.split(' ').map((x) => `.${x}`).join(' ')}}`;
    return `[![${imgAlt}](${src})${imgCls}](${url})${linkCls}`;
  } else {
    if (options.imgCls) clsArr.push(options.imgCls);
    if (clsArr.length > 0) imgCls = ` class='${clsArr.join(' ')}'`;
    if (options.linkCls) linkCls = ` class=${options.linkCls}`;
    return `<a href='${url}'${linkCls}${ariaDesc}><img src='${src}' alt="${imgAlt}"${imgCls}></a>`;
  }
}

// Paired
const tooltip = function(children, params) {
  let mainContent = ''
  if (params.src && params.url) {
    mainContent = imgWithLink(params.src, params.url, params);
  } else if (params.src && !params.url) {
    mainContent = img(params.src, params);
  } else {
    mainContent = link(params.url, params);
  }
  return `<div class='tooltip'>${mainContent}<div id='${params.tooltipId}' class='tooltip-content' role='tooltip'>${children}</div></div>`
}

const details = function (children, params) {
  let summary = '';
  if (params.title) {
    const summaryCls = (params.summaryCls) ? ` class='${params.summaryCls}'` : '';
    const summaryStyle = (params.summaryStyle) ? ` style='${params.summaryStyle}'` : '';
    summary = `<summary${summaryCls}${summaryStyle}>${params.title}</summary>`;
  }

  const detailsCls = (params.class) ? ` class='${params.class}'` : '';
  const detailsStyle = (params.detailsStyle) ? ` style='${params.detailsStyle}'` : '';
  const detailsOpen = (params.open) ? ` open` : '';
  return `<details${detailsCls}${detailsStyle}${detailsOpen}>${summary}${children}</details>`;
}

const figure = function (children, src, options = {}) {
  const imgSrc = (src.includes('http') || src.includes('/assets/images')) ? src : `/assets/images/${src}`;

  let imgStr = '';
  let imgCls = ''
  let imgAlt = '';

  if (options.bg) {
    if (options.imgCls) imgCls = ` ${options.imgCls}`;
    imgStr = `<div class='figure-div${imgCls}' style='background-image: url(${imgSrc})'></div>`;
  } else {
    if (options.imgCls) imgCls = ` class='${options.imgCls}`;
    if (options.alt) imgAlt = ` alt="${options.alt}"`;
    imgStr = `<img src='${imgSrc}'${imgAlt}${imgCls}>`
  }

  if (options.noLink != true) {
    const imgLink = (options.imgLink) ? options.imgLink : imgSrc;
    imgStr = `<a href='${imgLink}'>${imgStr}</a>`;
  }

  const figureCls = (options.cls) ? ` class='${options.cls}` : '';
  const figureStyle = (options.style) ? ` style='${options.style}'` : '';
  const caption = (options.noMarkdown) ? children : markdownLib.render(children.trim());
  const figcaptionCls = (options.figcaptionCls) ? ` class='${options.figcaptionCls}` : '';
  return `<figure${figureCls}${figureStyle}>${imgStr}<figcaption${figcaptionCls}>${caption}</figcaption></figure>`;
}

const galleryBox = function (children, params = {}) {
  let mainContent = children;
  let title = (params.title) ? `<h2>${params.title}</h2>` : '';
  let mainCls = (params.cls) ? ` ${params.cls}` : '';
  let subCls = (params.subCls) ? ` ${params.subCls}` : '';

  if (params.markdown) {
    if (params.title == "Likes") {
      console.log('debug');
    }
    mainContent = (params.markdown.inline) ? markdownLib.renderInline(children.trim()) : markdownLib.render(children.trim());
  }

  return `<div class='sidebar${mainCls}'>${title}<div class='content d-flex flex-wrap p-3${subCls}'>${mainContent}</div></div>`;
}

const convertToCode = function (children) {
  let content = children;
  content = content.replace(/[a-zA-Z]/g, m => isLowerCase(m) ? chars[m] : chars[m.toLowerCase()].toUpperCase());
  return content;
}

// helper functions
function isLowerCase(str) {
  return str === str.toLowerCase() && str !== str.toUpperCase();
}

module.exports = {
  icon,
  emoticon,
  emote,
  img,
  link,
  imgWithLink,
  tooltip,
  figure,
  details,
  galleryBox,
  convertToCode,
}
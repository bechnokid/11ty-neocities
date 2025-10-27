const { markdownLib } = require('../plugins/');

const icon = function (value, options = {}) {
  let iconCls = '';
  if (value == 'meat') {
    const iconAlt = (options.alt) ? ` alt="${options.alt}"` : '';
    if (options.cls) iconCls = ` class='${options.cls}'`;
    return `<img src='/assets/images/meat.png'${iconAlt}${iconCls}>`;
  } else if (value == 'new' || value == "updated") {
    return `<img src='/assets/images/${value}.gif' alt='${value[0].toUpperCase() + value.substring(1)}'>`;
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
  const ariaLabel = (options.ariaLabel) ? ` aria-label="${options.ariaLabel}"` : '';
  if (options.markdown && ariaDesc == '') {
    if (options.cls) linkCls = `{${options.cls.split(' ').map((x) => `.${x}`).join(' ')}}`;
    return `[${content}](${url})${linkCls}`
  } else {
    if (options.cls) linkCls = ` class='${options.cls}'`;
    return `<a href='${url}'${linkCls}${ariaDesc}${ariaLabel}>${content}</a>`;
  }
}

const img = function(src, options = {}) {
  let clsArr = [];
  if (options.freezeframe) clsArr.push('freezeframe');
  const imgAlt = (options.alt) ? options.alt.replace(/"/g, "&quot;") : "";

  let imgCls = '';
  let resultString = '';
  if (options.markdown && options.aria === undefined) {
    if (options.cls) clsArr.push(options.cls.split(' '));
    if (clsArr.length > 0) imgCls = `{${clsArr.flat().map((x) => `.${x}`).join(' ')}}`;

    resultString = `![${imgAlt}](${src})${imgCls}`;
    if (options.url){
      resultString = `[${resultString}](${options.url})`
      if (options.urlCls) resultString += `{${options.urlCls.split(' ').map((x) => `.${x}`).join(' ')}}`;
    }
    return resultString;
  } else {
    ariaStr = '';
    if (options.aria) {
      const ariaData = options.aria;
      if (ariaData.desc) ariaStr += ` aria-describedby="${ariaData.desc}"`;
      if (ariaData.hidden == true) ariaStr += ` aria-hidden="true"`
    }
    dataStr = '';
    if (options.cls) clsArr.push(options.cls.split(' '));
    if (clsArr.length > 0) imgCls = ` class='${clsArr.flat().join(' ')}'`

    resultString = `<img src='${src}' alt="${imgAlt}"${imgCls}${ariaStr}>`;
    if (options.url) {
      const urlCls = (options.urlCls) ? ` class='${options.urlCls}'` : '';
      const urlId = (options.urlId) ? ` id='${options.urlId}'` : '';
      resultString = `<a${urlId} href="${options.url}"${urlCls}>` + resultString + '</a>';
    }
  }
  return resultString;
};

const decoImg = function(params) {
  if (!params.src) return "No img src provided.";
  const cls = (params.cls)? ` class='${params.cls}'` : '';
  return `<img src=${params.src}${cls} aria-hidden="true">`;
}

// Paired
const tooltip = function(children, params) {
  let mainContent = (params.src) ? img(params.src, params) : link(params.url, params);
  return `<div class='tooltip'>${mainContent}<div id='${params.tooltipId}' class='tooltip-content' role='tooltip'>${children}</div></div>`
}

const details = function (children, params) {
  let summary = '';
  if (params.title) {
    const summaryCls = (params.summaryCls) ? ` class='${params.summaryCls}'` : '';
    const summaryStyle = (params.summaryStyle) ? ` style='${params.summaryStyle}'` : '';
    summary = `<summary${summaryCls}${summaryStyle}>${params.title}</summary>`;
  }

  const detailsId = (params.id) ? ` id='${params.id}'` : '';
  const detailsCls = (params.cls) ? ` class='${params.cls}'` : '';
  const detailsStyle = (params.detailsStyle) ? ` style='${params.detailsStyle}'` : '';
  const detailsOpen = (params.open) ? ` open` : '';
  return `<details${detailsId}${detailsCls}${detailsStyle}${detailsOpen}>${summary}${children}</details>`;
}

const figure = function (children, src, options = {}) {
  const imgSrc = (src.includes('http') || src.includes('/assets/images')) ? src : `/assets/images/${src}`;

  let imgStr = '';
  let imgCls = ''
  const imgAlt = (options.alt) ? options.alt.replace(/"/g, "&quot;") : "";

  if (options.bg) {
    if (options.imgCls) imgCls = ` ${options.imgCls}`;
    imgStr = `<div class='figure-div${imgCls}' style='background-image: url(${imgSrc})'></div>`;
  } else {
    if (options.imgCls) imgCls = ` class='${options.imgCls}`;
    imgStr = `<img src='${imgSrc}' alt="${imgAlt}"${imgCls}>`
  }

  if (options.noLink != true) {
    const imgLink = (options.imgLink) ? options.imgLink : imgSrc;
    imgStr = `<a href='${imgLink}'>${imgStr}</a>`;
  }

  const figureCls = (options.cls) ? ` class='${options.cls}'` : '';
  const figureStyle = (options.style) ? ` style='${options.style}'` : '';
  const caption = (options.noMarkdown) ? children : markdownLib.render(children.trim());
  const figcaptionCls = (options.figcaptionCls) ? ` class='${options.figcaptionCls}` : '';
  return `<figure${figureCls}${figureStyle}>${imgStr}<figcaption${figcaptionCls}>${caption}</figcaption></figure>`;
}
/* galleryBox params:
  - children: content between {% galleryBox %} and {% endgalleryBox %}
  - id (str): sets "id" attribute
  - title (str): creates <h2> for title
    - subTitle (str): creates <h3> for subTitle
    - title and subTitle cannot both be present
  - cls (str): sets class for .sidebar
  - subCls (str): sets class for .content
  - simple (boolean): determines if gallery box will be simple or a flex box
  - markdown (boolean or object): determines if content will be in Markdown
    - inline (boolean): if markdown is object, this determines whether or not to add <p> tags
*/
const galleryBox = function (children, params = {}) {
  let mainContent = children;
  const galleryId = (params.id) ? ` id="${params.id}"` : '';
  const title = (params.title) ? `<h2>${params.title}</h2>` : '';
  const subTitle = (params.subTitle) ? `<h3>${params.subTitle}</h3>` : '';

  if (title != "" && subTitle != "") return "<p>There cannot be both a title and a sub title.</p>";

  const mainCls = (params.cls) ? ` ${params.cls}` : '';
  let subCls = (params.simple) ? "" : " d-flex flex-wrap";
  if (params.subCls) subCls += ` ${params.subCls}`;

  if (params.markdown) {
    mainContent = (params.markdown.inline) ? markdownLib.renderInline(children.trim()) : markdownLib.render(children.trim());
  }

  return `${subTitle}<div${galleryId} class='sidebar${mainCls}'>${title}<div class='content p-3 position-relative${subCls}'>${mainContent}</div></div>`;
}

const convertToHtml = function(children) {
  return markdownLib.render(children.trim());
}

const artCaption = function(caption, params = {}){
  const ogDate = (params.originalDate) ? `From ${params.originalDate}.` : '';
  const ogCaption = params.originalCaption ? `<blockquote class='mb-4'>${markdownLib.renderInline(params.originalCaption.replaceAll("\\n", "\n").trim())}</blockquote>` : '';
  const transcript =  params.transcript ? `<details id='transcript'><summary class='h3 text-primary'>Transcript</summary><p class='my-1 ms-4'>${markdownLib.renderInline(params.transcript.replaceAll("\\n", "\n").trim())}</p></details>` : '';
  const cap = caption ? markdownLib.renderInline(caption.replaceAll("\\n", "\n").trim()) : '';
  return `${ogDate}${ogCaption} ${cap}${transcript}`;
}

// helper functions
function isLowerCase(str) {
  return str === str.toLowerCase() && str !== str.toUpperCase();
}

module.exports = {
  decoImg,
  icon,
  emoticon,
  emote,
  img,
  link,
  tooltip,
  figure,
  details,
  galleryBox,
  convertToHtml,
  artCaption
}
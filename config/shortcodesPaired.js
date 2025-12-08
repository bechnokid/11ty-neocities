const { img, link } = require('./shortcodes.js');
const markdownLib = require('./markdownlib.js');

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

module.exports = {
  tooltip,
  figure,
  details,
  galleryBox,
}
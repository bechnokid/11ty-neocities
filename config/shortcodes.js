const markdownLib = require('./markdownlib.js');

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

const artCaption = function(caption, params = {}){
  const ogDate = (params.originalDate) ? `From ${params.originalDate}.` : '';
  const ogCaption = params.originalCaption ? `<blockquote class='mb-4'>${markdownLib.renderInline(params.originalCaption.replaceAll("\\n", "\n").trim())}</blockquote>` : '';
  const transcript =  params.transcript ? `<details id='transcript'><summary class='h3 text-primary'>Transcript</summary><p class='my-1 ms-4'>${markdownLib.renderInline(params.transcript.replaceAll("\\n", "\n").trim())}</p></details>` : '';
  const cap = caption ? markdownLib.renderInline(caption.replaceAll("\\n", "\n").trim()) : '';
  return `${ogDate}${ogCaption} ${cap}${transcript}`;
}

module.exports = {
  decoImg,
  icon,
  emoticon,
  emote,
  img,
  link,
  artCaption,
}
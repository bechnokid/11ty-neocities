const markdownLib = require('./markdownlib.js');

const icon = function (value, options = {}) {
  let iconCls = '';
  if (value == 'meat') {
    const iconAlt = (options.alt) ? ` alt="${options.alt}"` : '';
    if (options.cls) iconCls = ` class='${options.cls}'`;
    return `<img src='/assets/images/meat.png'${iconAlt + iconCls}>`;
  } else if (value == 'new' || value == "updated") {
    return `<img src='/assets/images/${value}.gif' alt='${value[0].toUpperCase() + value.substring(1)}'>`;
  } else {
    if (options.cls) iconCls = ` ${options.cls}`;
    return `<i class='ft-${value + iconCls}'></i>`
  }
}

const emoji = function (value) {
  return `<span class='emoji'>${value}</span>`
}

const emoticon = function (value) {
  return `<img class='emoticon' src='/assets/images/blog/emoticon/${value}.svg' aria-hidden='true' alt=''>`;
}

const emote = value => {
  return `<img class='inline-img' src='/assets/images/blog/emoticon/emote_${value}.png' aria-hidden='true' alt=''>`;
}

const link = function (url, options = {}) {
  let linkCls = '';
  let linkContent = options.text || url;
  const desc = (options.desc) ? ` aria-describedby="${options.desc}"` : '';
  const alt = (options.alt) ? ` aria-label="${options.alt}"` : '';
  if (options.markdown && desc == '') {
    if (options.cls) linkCls = `{${options.cls.split(' ').map((x) => `.${x}`).join(' ')}}`;
    return `[${linkContent}](${url})${linkCls}`
  } else {
    if (options.cls) linkCls = ` class='${options.cls}'`;
    return `<a href='${url}'${linkCls + desc + alt}>${linkContent}</a>`;
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
    let optionsArr = [];
    if (options.cls) clsArr.push(options.cls.split(' '));
    if (clsArr.length > 0) optionsArr.push(` class='${clsArr.flat().join(' ')}'`);
    if (options.width) optionsArr.push(` width="${options.width}px"`);
    if (options.height) optionsArr.push(` height="${options.height}px"`);
    if (options.ariaHidden) optionsArr.push(' aria-hidden="true"');
    if (options.ariaDescribedBy) optionsArr.push(` aria-describedby="${options.ariaDescribedBy}"`)

    resultString = `<img src='${src}' alt="${imgAlt}"${optionsArr.flat().join(' ')}>`;
    if (options.url) {
      const urlCls = (options.urlCls) ? ` class='${options.urlCls}'` : '';
      const urlId = (options.urlId) ? ` id='${options.urlId}'` : '';
      resultString = `<a${urlId} href="${options.url}"${urlCls}>${resultString}</a>`;
    }
  }
  return resultString;
};

const imgDiv = function(params) {
  const divCls = (params.cls) ? ` class="${params.cls}"` : "";
  let results = `<div${divCls} role="img" aria-label="${params.alt}"></div>`;
  if (params.url) {
    const urlCls = (params.urlCls) ? ` class="${params.urlCls}"` : "";
    results = `<a href="${params.url}"${urlCls}>${results}</a>`
  }
  return results;
}

const artCaption = function(caption, params = {}){
  const ogDate = (params.originalDate) ? `From ${params.originalDate}.` : '';
  const ogCaption = params.originalCaption ? `<blockquote class='mb-4'>${markdownLib.renderInline(params.originalCaption.replaceAll("\\n", "\n").trim())}</blockquote>` : '';
  const transcript =  params.transcript ? `<details id='transcript'><summary class='h3 text-primary'>Transcript</summary><p class='my-1 ms-4'>${markdownLib.renderInline(params.transcript.replaceAll("\\n", "\n").trim())}</p></details>` : '';
  const cap = caption ? markdownLib.renderInline(caption.replaceAll("\\n", "\n").trim()) : '';
  return `${ogDate + ogCaption} ${cap + transcript}`;
}

module.exports = {
  icon,
  emoji,
  emoticon,
  emote,
  img,
  imgDiv,
  link,
  artCaption,
}
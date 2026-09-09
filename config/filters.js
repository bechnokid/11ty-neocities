const { format } = require('date-fns');
const { minify } = require("html-minifier-terser");
const markdownLib = require('./markdownlib.js');
const cheerio = require('cheerio');
const slugify = require('slugify');

// Converts date to local timezone
const local = value => {
  return (value instanceof Date) ? value.setHours(value.getHours() + 4) : value;
}

// Formats date into YYYY-MM-DD (2025-01-01)
const dateToIso8601 = value => {
  const dateObj = (value instanceof Date) ? value : parseDate(value);
  return format(dateObj, "yyyy-MM-dd");
}

// Formats the date into Day of Month Year (01 of January 2000)
const dayOfMonth = value => {
  const dateObj = (value instanceof Date) ? value.setHours(value.getHours() + 4) : parseDate(value);
  return `${format(dateObj, 'do')} of ${format(dateObj, 'MMMM yyyy')}`;
}

// Formats the date into Month Day, Year (January 01, 2000)
const monthDayYear = value => {
  const dateObj = (value instanceof Date) ? value.setHours(value.getHours() + 4) : parseDate(value);
  return `${format(dateObj, 'PPP')}`;
}

// Formats the date into Mon Day, Year (Jan 01, 2000)
const monDayYear = value => {
  const dateObj = (value instanceof Date) ? value.setHours(value.getHours() + 4) : parseDate(value);
  return `${format(dateObj, 'PP')}`;
}

// Converts any string into Markdown
const markdownify = value => {
  return markdownLib.render((value == null) ? "" : value.trim());
}

// Converts any string into Markdown without adding <p> tags
const markdownifyInline = value => {
  if (value == null) value = "";
  return markdownLib.renderInline(value.replaceAll("\\n", "\n").trim());
}

// Minifies HTML
const htmlMinify = value => {
  return minify(value);
}

// Sorts collections by displayOrder
const sortCollectionByDisplayOrder = collection => {
  if (collection[0].data !== undefined) {
    return collection.sort((a, b) =>
      a.data.displayOrder - b.data.displayOrder
    );
  } else {
    return collection.sort((a, b) =>
      a.displayOrder - b.displayOrder
    );
  }
}

function limit (arr, limit) {
  return arr.slice(0, limit);
}

const getPageLinks = value => {
  let resultArray = value.map( item => item.page.url )
  return resultArray;
}

// Generates table of contents
const tableOfContents = html => {
  if (!html || typeof html !== 'string') return []

	const $ = cheerio.load(html, null, false)
	const headings = $('h2, h3, h4').toArray()

	return headings.length < 2 ? [] : buildTocTree($, headings)
}

// helper methods
function parseDate (value, timeValue = null) {
  let timeStr = "00:00";
  if (timeValue) timeStr = timeValue;
  let dateStr = `${value} ${timeStr}`;
  return new Date(dateStr);
}

function buildTocTree ($, headings) {
  const tree = [];
  let currentList2 = null;
  let currentList3 = null;

  for (const heading of headings) {
    const data = getHeadingData($, heading);
    if (!data) continue;
    const node = { ...data, children: [] };

    if (node.level === 2) {
      tree.push(node);
      currentList2 = node;
      currentList3 = null;
    } else if (node.level === 3) {
      if (currentList2) {
        currentList2.children.push(node);
      } else {
        tree.push(node);
      }
      currentList3 = node;
    } else {
      if (currentList3) currentList3.children.push(node);
      else if (currentList2) {
        currentList2.children.push(node);
      } else {
        tree.push(node);
      }
    }
  }
  return tree;
}

function getHeadingData($, heading) {
  const text = $(heading).text().trim();

  if (!text) return null;

  const element = heading?.name ?? '';
  const level = Number(element.match(/^h([1-6])$/i)?.[1] ?? 2);
  const id = heading?.attribs?.id ?? slugify(text);
  return { id, level, text };
}

module.exports = {
  base: {
    local,
    dateToIso8601,
    dayOfMonth,
    monthDayYear,
    monDayYear,
    markdownify,
    markdownifyInline,
    htmlMinify,
    sortCollectionByDisplayOrder,
    getPageLinks,
    tableOfContents
  },
  njk: {
    limit,
  },
}
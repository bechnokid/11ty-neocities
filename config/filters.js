const { format } = require('date-fns');
const { minify } = require("html-minifier-terser");
const markdownLib = require('./markdownlib.js');

// Converts date to local timezone
const local = value => {
  return (value instanceof Date) ? value.setHours(value.getHours() + 4) : value;
}

// Formats date into YYYY-MM-DD (2025-01-01)
const dateToIso8601 = value => {
  const dateObj = (value instanceof Date) ? value : parseDate(value);
  return dateObj.toLocaleDateString();
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

// helper methods
function parseDate (value, timeValue = null) {
  let timeStr = "00:00";
  if (timeValue) timeStr = timeValue;
  let dateStr = `${value} ${timeStr}`;
  return new Date(dateStr);
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
  },
  njk: {
    limit,
  },
}
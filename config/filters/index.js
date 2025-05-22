const { format } = require('date-fns');
const markdownLib = require('../plugins/markdown');
const chars = require('../variables.js');

// Converts date string into Date object
const date = value => {
  const dateObject =  parseDate(value);
  return dateObject;
}

// Formats the date into Day of Month Year
const dayOfMonth = value => {
  const dateObject = parseDate(value);
  return `${format(dateObject, 'do')} of ${format(dateObject, 'MMMM yyyy')}`;
}

// Formats the date into Month Day, Year
const monthDayYear = value => {
  const dateObject = parseDate(value);
  return `${format(dateObject, 'PPP')}`;
}

// Formats the date into Mon Day, Year
const monDayYear = value => {
  const dateObject = parseDate(value);
  return `${format(dateObject, 'PP')}`;
}

// Formats date into ISO format
const w3DateFilter = value => {
  const dateObject = parseDate(value);
  return dateObject.toISOString();
}

// Converts any string into Markdown
const markdownify = value => {
  if (value == null) value = "";
  return markdownLib.render(value.trim());
}

const markdownifyInline = value => {
  if (value == null) value = "";
  return markdownLib.renderInline(value.trim());
}

// Sorts collections by displayOrder
const sortCollectionByDisplayOrder = collection => {
  return collection.sort((a, b) =>
    Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1
  );
}

function limit (arr, limit) {
  return arr.slice(0, limit);
}

function useCode(value) {
  return value.replace(/[a-zA-Z]/g, m => isLowerCase(m) ? chars[m] : chars[m.toLowerCase()].toUpperCase());
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

function isLowerCase(str) {
  return str === str.toLowerCase() && str !== str.toUpperCase();
}

module.exports = {
  date,
  dayOfMonth,
  monthDayYear,
  monDayYear,
  w3DateFilter,
  markdownify,
  markdownifyInline,
  sortCollectionByDisplayOrder,
  getPageLinks,
  useCode,
  limit
}
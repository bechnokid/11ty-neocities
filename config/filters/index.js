const { format } = require('date-fns');
const { markdownLib } = require('../plugins/');

// Converts date to local timezone
const local = value => {
  return (value instanceof Date) ? value.setHours(value.getHours() + 4) : value;
}

// Formats the date into Day of Month Year
const dayOfMonth = value => {
  const dateObject = (value instanceof Date) ? value.setHours(value.getHours() + 4) : parseDate(value);
  return `${format(dateObject, 'do')} of ${format(dateObject, 'MMMM yyyy')}`;
}

// Formats the date into Month Day, Year
const monthDayYear = value => {
  const dateObject = (value instanceof Date) ? value.setHours(value.getHours() + 4) : parseDate(value);
  return `${format(dateObject, 'PPP')}`;
}

// Formats the date into Mon Day, Year
const monDayYear = value => {
  const dateObject = (value instanceof Date) ? value.setHours(value.getHours() + 4) : parseDate(value);
  return `${format(dateObject, 'PP')}`;
}

// Converts any string into Markdown
const markdownify = value => {
  return markdownLib.render((value == null) ? "" : value.trim());
}

const markdownifyInline = value => {
  if (value == null) value = "";
  return markdownLib.renderInline(value.replaceAll("\\n", "\n").trim());
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
  local,
  dayOfMonth,
  monthDayYear,
  monDayYear,
  markdownify,
  markdownifyInline,
  sortCollectionByDisplayOrder,
  getPageLinks,
  limit
}
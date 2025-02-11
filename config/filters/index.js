const { format, formatDistanceToNow } = require('date-fns');
const markdownLib = require('../plugins/markdown');
const CleanCSS = require("clean-css");

// Minifies CSS
const cssmin = code => {
  return new CleanCSS({}).minify(code).styles;
}

// Converts date string into Date object
const date = value => {
  const dateObject =  new Date(value);
  return dateObject;
}

// Formats the date into Day of Month Year
const dayOfMonth = value => {
  return `${format(value, 'do')} of ${format(value, 'MMMM yyyy')}`;
}

// Formats the date into Month Day, Year
const monthDayYear = value => {
  return `${format(value, 'PPP')}`;
}

// Formats the date into Mon Day, Year
const monDayYear = value => {
  return `${format(value, 'PP')}`;
}

// Formats time into "time ago"
const fromNow = value => {
  return `${formatDistanceToNow( value + '-05:00', { addSuffix: true } )}`;
}

// Formats date into ISO format
const w3DateFilter = value => {
  const dateObject = new Date(value);
  return dateObject.toISOString();
}

// Converts any string into Markdown
const markdownify = value => {
  if (value == null) value = "";
  return markdownLib.render(value);
}

// Sorts collections by displayOrder
const sortCollectionByDisplayOrder = collection => {
  return collection.sort((a, b) =>
    Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1
  );
}

module.exports = {
  cssmin,
  date,
  dayOfMonth,
  monthDayYear,
  monDayYear,
  fromNow,
  w3DateFilter,
  markdownify,
  sortCollectionByDisplayOrder,
}
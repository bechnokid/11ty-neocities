const { parse } = require('csv-parse/sync');
module.exports = function(contents) {
  const records = parse(contents, {
    columns: true,
    skip_empty_lines: true,
    relax_column_count: true,
    delimiter: '|',
    trim: true,
    relax_quotes: true,
  });

  return records;
}
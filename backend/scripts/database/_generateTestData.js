const fs = require('fs');
const path = require('path');

// Directory containing SQL files
const sqlFilesDirectory = path.join(__dirname, 'test_data_1');

// Output file
const outputFile = path.join(__dirname, 'test_data.sql');

// Read all SQL files in the directory
const sqlFiles = fs
  .readdirSync(sqlFilesDirectory)
  .filter((file) => file.endsWith('.sql'))
  .map((file) => path.join(sqlFilesDirectory, file));

// Concatenate SQL files
const concatenatedSQL =
  'USE spremiis_dev; \n' +
  sqlFiles.map((file) => fs.readFileSync(file, 'utf8')).join('\n');

// Write the concatenated SQL to the output file
fs.writeFileSync(outputFile, concatenatedSQL, 'utf8');

console.log('Database.sql file created successfully.');

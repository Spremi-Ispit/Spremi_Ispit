const fs = require('fs');
const path = require('path');

const sqlFilesDirectory = path.join(__dirname, 'test_data');
const outputFile = path.join(__dirname, 'data.sql');

const sqlFiles = fs
  .readdirSync(sqlFilesDirectory)
  .filter((file) => file.endsWith('.sql'))
  .map((file) => path.join(sqlFilesDirectory, file));

const sqlData =
  'USE spremiis_dev; \n' +
  sqlFiles.map((file) => fs.readFileSync(file, 'utf8')).join('\n');

fs.writeFileSync(outputFile, sqlData, 'utf8');

const fs = require('fs');
const path = require('path');

async function main() {
  fs.copyFile(
    path.join(__dirname, 'test_data.sql'),
    './dist/scripts/database/test_data.sql',
    (err) => {
      if (err) console.log(err);
    }
  );
}

main().catch(console.error);

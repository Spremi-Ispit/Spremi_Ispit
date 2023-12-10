/* eslint-disable */
import fs from 'fs';

async function main() {
  console.log();

  fs.copyFile('.env.local.development', '.env', (err) => {
    if (err) console.log(err);
  });

  console.log('The environment has been set up!');
}

main().catch(console.error);

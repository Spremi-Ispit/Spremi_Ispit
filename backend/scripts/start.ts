// @ts-nocheck
/* eslint-disable */
import { intro, outro, spinner } from '@clack/prompts';
import color from 'picocolors';
import { spawn } from 'child_process';
import fs from 'fs';

function runBackend() {
  return new Promise((resolve, reject) => {
    const backend = spawn(
      'cross-env NODE_ENV=development node ./dist/src/index.js',
      { shell: true }
    );

    backend.stdout.on('data', (data) => {
      const output = data.toString();
      console.log(output);

      if (output.includes('Server initialized')) {
        resolve();
      }
    });

    backend.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    backend.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });

    backend.on('exit', () => {
      console.log('Backend process has exited.');
    });
  });
}

async function main() {
  console.log();

  intro(color.inverse(' Backend '));

  const exist = fs.existsSync('.env');

  if (!exist) {
    outro(
      'Before running the backend, you have to setup the environment. Execute: npm run setupEnv'
    );
    process.exit();
  }

  const s = spinner();
  s.start('Starting...');

  await runBackend();

  s.stop(`Backend started!`);
}

main().catch(console.error);

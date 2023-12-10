/* eslint-disable */
import fs from 'fs';
import { intro, outro, confirm, select } from '@clack/prompts';
import { execa } from 'execa';
import color from 'picocolors';
import { checkIsOperationCanceled } from './utils.js';
import { spawn } from 'child_process';
import { zipDirectory } from './zip.js';

function building() {
  return new Promise((resolve, reject) => {
    const build = spawn('npm run build', { shell: true });

    build.stdout.on('data', (data) => {
      console.log(`${data}`);
    });

    build.stderr.on('data', (data) => {
      console.error(`${data}`);
    });

    build.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        console.error(`Build process has exited with code ${code}.`);
        process.exit(0);
      }
    });
  });
}

const deploy = async () => {
  intro(color.inverse(' Deploy '));

  const deployFor = {
    production: 'production',
    development: 'development',
  };

  const env = await select({
    message: 'Building for',
    options: [
      { value: deployFor.production, label: 'production' },
      {
        value: deployFor.development,
        label: 'development',
      },
    ],
  });
  checkIsOperationCanceled(env);

  if (env === deployFor.production && !fs.existsSync('.env.host.production')) {
    outro("Operation cancelled: .env.host.production doesn't exist!");
    process.exit(0);
  }

  let envData = null;
  if (fs.existsSync('.env')) {
    envData = fs.readFileSync('.env', 'utf-8');
  }

  if (env === deployFor.production) {
    fs.copyFile('.env.host.production', '.env', (err) => {
      if (err) throw err;
    });
  } else {
    fs.copyFile('.env.host.development', '.env', (err) => {
      if (err) throw err;
    });
  }

  //-----------------------
  const bumpVersion = await confirm({
    message: 'Do you want to bump version?',
  });

  checkIsOperationCanceled(bumpVersion);

  if (bumpVersion) {
    await execa('npm version patch');
  }
  outro('Bulding the project...');
  await building();
  outro('The project has been build!');

  outro('Archiving...');
  await zipDirectory();
  outro('Archiving finised');
  // ----------------------
  if (envData) {
    fs.writeFileSync('.env', envData);
  } else {
    fs.unlink('.env', (err) => {
      if (err) throw err;
    });
  }
};

deploy();

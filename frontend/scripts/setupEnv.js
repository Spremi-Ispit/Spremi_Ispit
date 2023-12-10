/* eslint-disable */
import { select, spinner } from '@clack/prompts';
import fs from 'fs';
import { checkIsOperationCanceled } from './utils.js';

async function main() {
  console.log();
  const s = spinner();

  s.start('Setting up the environment...');

  const backendEnv = {
    local: 'local',
    hosting: 'hosting',
  };

  const env = await select({
    message: 'Backend is running on ',
    options: [
      { value: backendEnv.hosting, label: 'hosting environment' },
      {
        value: backendEnv.local,
        label: 'local environment',
        hint: 'the backend must be started before launching the frontend',
      },
    ],
  });

  checkIsOperationCanceled(env);

  if (env === backendEnv.local) {
    fs.copyFile('.env.local.development', '.env', (err) => {
      if (err) console.log(err);
    });
  } else {
    fs.copyFile('.env.host.development', '.env', (err) => {
      if (err) console.log(err);
    });
  }

  s.stop("You're all set!");
}

main().catch(console.error);

/* eslint-disable */
import { intro, outro, spinner } from '@clack/prompts';
import color from 'picocolors';
import { spawn } from 'child_process';
import fs from 'fs';

function runVite() {
  // Added async/await because the port may change, as Vite is configured to use the next available port.
  // waitPort({
  //   port: 3008,
  // }); //, thats why
  return new Promise((resolve, reject) => {
    const vite = spawn('vite', { shell: true });

    vite.stdout.on('data', (data) => {
      const output = data.toString();
      console.log(output);

      if (output.includes('http://localhost')) {
        resolve();
      }
    });

    vite.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    vite.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });

    vite.on('exit', () => {
      console.log('Vite process has exited.');
    });
  });
}

async function main() {
  console.log();

  intro(color.inverse(' Frontend '));

  const exist = fs.existsSync('.env');

  if (!exist) {
    outro(
      'Before running the frontend, you have to setup the environment. Execute: npm run setupEnv'
    );
    process.exit();
  }

  const s = spinner();
  s.start('Starting... ');
  await runVite();

  const backendEnv = {
    local: 'local',
    hosting: 'hosting',
  };

  const env = fs.readFileSync('.env');
  const envHostDevelopment = fs.readFileSync('.env.host.development');

  let environment = backendEnv.local;
  if (env.equals(envHostDevelopment)) {
    environment = backendEnv.hosting;
  }
  s.stop(
    `Utilizing the backend from the ${environment} environment. To change the environment run: npm run setupEnv`
  );
}

main().catch(console.error);

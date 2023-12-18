import { execa } from 'execa';

async function gitCommitCaseSensitive() {
  await execa('git rm -r --cached .');
  await execa('git add --all .');
}

gitCommitCaseSensitive();

// @ts-nocheck
import fs from 'fs';

export async function removeFiles(id, directory) {
  const path = `files/${directory}/${id}`;

  if (fs.existsSync(path)) {
    fs.rmSync(path, { recursive: true, force: true });
  }
}

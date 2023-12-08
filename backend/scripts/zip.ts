// @ts-nocheck
import archiver from 'archiver';
import fs from 'fs';

export function zipDirectory() {
  const sourceFiles = ['.env', 'package.json'];
  const sourceDir = 'dist';
  const outPath = 'backend.zip';

  const archive = archiver('zip', { zlib: { level: 9 } });
  const stream = fs.createWriteStream(outPath);

  return new Promise((resolve, reject) => {
    sourceFiles.forEach((sourceFile) => {
      archive.file(sourceFile, { name: sourceFile });
    });

    archive.directory(sourceDir, true);

    archive.on('error', (err) => reject(err)).pipe(stream);

    stream.on('close', () => resolve());
    archive.finalize();
  });
}

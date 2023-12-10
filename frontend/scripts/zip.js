import archiver from 'archiver';
import fs from 'fs';

export function zipDirectory() {
  const sourceDir = 'dist';
  const outPath = 'frontend.zip';

  const archive = archiver('zip', { zlib: { level: 9 } });
  const stream = fs.createWriteStream(outPath);

  return new Promise((resolve, reject) => {
    archive
      .directory(sourceDir, false)
      .on('error', (err) => reject(err))
      .pipe(stream);

    stream.on('close', () => resolve());
    archive.finalize();
  });
}

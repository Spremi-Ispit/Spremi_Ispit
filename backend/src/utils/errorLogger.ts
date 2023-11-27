// @ts-nocheck
import fs from 'fs';

export const errorLogger = (...args) => {
  const filePath = 'error.log';
  const message = args.join(' ');
  fs.appendFileSync(filePath, message + '\n');
};

// @ts-nocheck

import { dataSource } from '../entities/index.js';

export const database = async () => {
  try {
    await dataSource.initialize();
    console.log('');
    console.log('DataSource has been initialized!');
  } catch (err) {
    console.log('');
    console.log('Error during Data Source initialization: ' + err);
    process.exit();
  }
};

// @ts-nocheck
import env from '../../src/config/env';
import createConnection from './helpers/createConnection';
import log from './helpers/log';

export const dropDatabase = async () => {
  try {
    const connection = await createConnection();
    await connection.query(`DROP DATABASE IF EXISTS ${env.DB_NAME}`);
    log('Database has been dropped!');
    await connection.end();
  } catch (err) {
    log(err);
    process.exit();
  }
};

dropDatabase();

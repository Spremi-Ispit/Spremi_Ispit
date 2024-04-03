// @ts-nocheck
import fs from 'fs';
import env from '../../src/config/env';
import createConnection from './helpers/createConnection';
import log from './helpers/log';

export const populateDatabase = async () => {
  try {
    const filePath = 'database/data.sql';
    let sqlData = `USE ${env.DB_NAME}; \n`;
    sqlData += `SET FOREIGN_KEY_CHECKS = 0; \n`;
    sqlData += fs.readFileSync(filePath).toString() + '\n';
    sqlData += `SET FOREIGN_KEY_CHECKS = 1; \n`;

    const connection = await createConnection();
    await connection.query(`${sqlData}`);
    log('Database has been populated!');
    await connection.end();
  } catch (err) {
    log(err);
    process.exit();
  }
};

populateDatabase();

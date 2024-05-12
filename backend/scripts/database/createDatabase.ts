// @ts-nocheck
import env from '../../src/config/env.js';
import { dataSource } from '../../src/entities/index.js';
import createConnection from './helpers/createConnection.js';
import log from './helpers/log.js';

export const createDatabase = async () => {
  try {
    const connection = await createConnection();
    const databaseExists = await checkDatabaseExists(connection);

    if (!databaseExists) {
      await connection.query(`CREATE DATABASE IF NOT EXISTS ${env.DB_NAME}`);

      dataSource.options.synchronize = true;
      await dataSource.initialize();

      log('Database has been created!');
      // "synchronize = true" should work all the time, but some tables have the upper case in their names (see entities):
      // https://stackoverflow.com/questions/62434734/typeorm-throws-queryfailederror-table-already-exists-on-mysql-when-synchronize-i
      await connection.end();
    }
  } catch (err) {
    log('Error during Database creation: ' + err);
  } finally {
    process.exit();
  }
};

const checkDatabaseExists = async (connection) => {
  try {
    const [rows] = await connection.query(
      `SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = ?`,
      [env.DB_NAME]
    );

    return rows.length > 0;
  } catch (err) {
    throw err;
  }
};

createDatabase();

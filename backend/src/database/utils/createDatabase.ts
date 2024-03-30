// @ts-nocheck
import env from '../../config/env';
import { dataSource } from '../../entities/DataSource';

export const createDatabase = async (connection, log) => {
  try {
    const databaseExists = await checkDatabaseExists(connection);

    if (!databaseExists) {
      await connection.query(`CREATE DATABASE IF NOT EXISTS ${env.DB_NAME}`);
      dataSource.options.synchronize = true;
    }

    await dataSource.initialize();
    log('Database has been initialized!');
  } catch (err) {
    log('Error during Data Source initialization: ' + err);
    process.exit();
  }
};

const checkDatabaseExists = async (connection) => {
  try {
    const queryResult = await connection.query(
      `SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = ?`,
      [env.DB_NAME]
    );
    return queryResult.length > 0;
  } catch (err) {
    throw err;
  }
};

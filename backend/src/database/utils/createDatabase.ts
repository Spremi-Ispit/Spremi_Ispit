// @ts-nocheck
import env from '../../config/env';
import { dataSource } from '../../entities/DataSource';

export const createDatabase = async (connection, log) => {
  try {
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${env.DB_NAME}`);
  } catch (err) {
    log(err);
    process.exit();
  }

  try {
    await dataSource.initialize();
    log('Database has been initialized!');
  } catch (err) {
    log('Error during Data Source initialization: ' + err);
    process.exit();
  }
};

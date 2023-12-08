// @ts-nocheck
import mysql from 'mysql2/promise';
import env from '../../src/config/env';
import { dataSource } from '../../src/entities/DataSource';

const createDatabase = async () => {
  try {
    const connection = await mysql.createConnection({
      host: env.DB_HOST,
      port: env.DB_PORT,
      user: env.MYSQL_USER,
      password: env.MYSQL_PASSWORD
    });

    await connection.query(`CREATE DATABASE IF NOT EXISTS ${env.DB_NAME}`);
  } catch (err) {
    console.log(err);
    process.exit();
  }

  try {
    dataSource.options.synchronize = true;
    await dataSource.initialize();
    console.log('Database has been created!');
  } catch (err) {
    console.error('Error during Data Source initialization', err);
  } finally {
    process.exit();
  }
};

createDatabase();

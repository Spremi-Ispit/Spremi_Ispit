// @ts-nocheck
import mysql from 'mysql2/promise';
import env from '../config/env';
import { dataSource } from './datasource';

const createDatabase = async () => {
  try {
    const connection = await mysql.createConnection({
      host: env.DB_HOST,
      port: env.DB_PORT,
      user: env.DB_USER,
      password: env.DB_PASSWORD
    });

    await connection.query(`CREATE DATABASE IF NOT EXISTS ${env.DB_NAME}`);
  } catch (err) {
    console.log(err);
    process.exit();
  }

  try {
    await dataSource.initialize();
  } catch (err) {
    console.error('Error during Data Source initialization', err);
  } finally {
    console.log('Database has been recreated!');
    process.exit();
  }
};

createDatabase();

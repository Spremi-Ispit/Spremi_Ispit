// @ts-nocheck
import mysql from 'mysql2/promise';
import env from '../config/env';

const dropDatabase = async () => {
  try {
    const connection = await mysql.createConnection({
      host: env.DB_HOST,
      port: env.DB_PORT,
      user: env.DB_USER,
      password: env.DB_PASSWORD
    });

    await connection.query(`DROP DATABASE IF EXISTS ${env.DB_NAME}`);
    console.log('Database has been dropped!');
  } catch (err) {
    console.log(err);
  } finally {
    process.exit();
  }
};

dropDatabase();

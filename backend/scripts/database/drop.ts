// @ts-nocheck
import mysql from 'mysql2/promise';
import env from '../../src/config/env';

const dropDatabase = async () => {
  try {
    const connection = await mysql.createConnection({
      host: env.DB_HOST,
      port: env.DB_PORT,
      user: env.MYSQL_USER,
      password: env.MYSQL_PASSWORD
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

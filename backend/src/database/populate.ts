// @ts-nocheck
import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';
import env from '../config/env';

const populateDatabase = async () => {
  const filePath = path.join(__dirname, './test_data/database.sql');

  const sqlData = fs.readFileSync(filePath).toString();

  try {
    const connection = await mysql.createConnection({
      host: env.DB_HOST,
      port: env.DB_PORT,
      user: env.MYSQL_USER,
      password: env.MYSQL_PASSWORD,
      multipleStatements: true
    });

    await connection.query(`${sqlData}`);
    console.log('Database has been populated!');
  } catch (err) {
    console.log(err);
  } finally {
    process.exit();
  }
};

populateDatabase();

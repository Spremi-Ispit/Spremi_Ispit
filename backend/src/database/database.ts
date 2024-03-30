// @ts-nocheck
import mysql from 'mysql2/promise';
import env from '../config/env';
import { createDatabase } from './utils/createDatabase';
import { populateDatabase } from './utils/populateDatabase';
import { dropDatabase } from './utils/dropDatabase';

const createConnection = async () => {
  const connection = await mysql.createConnection({
    host: env.DB_HOST,
    port: env.DB_PORT,
    user: env.MYSQL_USER,
    password: env.MYSQL_PASSWORD,
    multipleStatements: true
  });

  return connection;
};

const log = (msg) => {
  console.log('');
  console.log(msg);
};

export const database = async () => {
  const connection = await createConnection();

  await createDatabase(connection, log);
  // await populateDatabase(connection, log);
  // await dropDatabase(connection, log);

  await connection.end();
};

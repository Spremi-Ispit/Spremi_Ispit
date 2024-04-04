// @ts-nocheck

import mysql from 'mysql2/promise';
import env from '../../../src/config/env';

export const createConnection = async () => {
  const connection = await mysql.createConnection({
    host: env.DB_HOST,
    port: env.DB_PORT,
    user: env.MYSQL_USER,
    password: env.MYSQL_PASSWORD,
    multipleStatements: true
  });

  return connection;
};

export default createConnection;

// @ts-nocheck
import fs from 'fs';
import { User } from '../../entities/User';
import env from '../../config/env';

export const populateDatabase = async (connection, log) => {
  const users = await User.find();

  if (users.length === 0) {
    const filePath = 'database/data.sql';
    let sqlData = `USE ${env.DB_NAME}; \n`;
    sqlData += `SET FOREIGN_KEY_CHECKS = 0; \n`;
    sqlData += fs.readFileSync(filePath).toString() + '\n';
    sqlData += `SET FOREIGN_KEY_CHECKS = 1; \n`;

    try {
      await connection.query(`${sqlData}`);
      log('Database has been populated!');
    } catch (err) {
      log(err);
      process.exit();
    }
  }
};

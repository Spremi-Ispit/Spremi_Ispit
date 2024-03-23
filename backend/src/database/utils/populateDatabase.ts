// @ts-nocheck
import fs from 'fs';
import { User } from '../../entities/User';

export const populateDatabase = async (connection, log) => {
  const users = await User.find();

  if (users.length === 0) {
    const filePath = 'database/data.sql';
    const sqlData = fs.readFileSync(filePath).toString();

    try {
      await connection.query(`${sqlData}`);
      log('Database has been populated!');
    } catch (err) {
      log(err);
      process.exit();
    }
  }
};

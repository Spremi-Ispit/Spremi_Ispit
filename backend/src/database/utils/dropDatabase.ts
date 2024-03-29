// @ts-nocheck
import env from '../../config/env';

export const dropDatabase = async (connection, log) => {
  try {
    await connection.query(`DROP DATABASE IF EXISTS ${env.DB_NAME}`);
    log('Database has been dropped!');
  } catch (err) {
    log(err);
    process.exit();
  }
};

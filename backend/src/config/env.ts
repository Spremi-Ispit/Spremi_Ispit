import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const env = process.env;

export const NODE_ENV = {
  development: 'development',
  production: 'production'
};

export default {
  NODE_ENV: env.NODE_ENV,
  ACCESS_TOKEN_SECRET: env.ACCESS_TOKEN_SECRET,
  DB_HOST: env.DB_HOST,
  DB_PORT: env.DB_PORT,
  DB_USER: env.DB_USER,
  DB_PASSWORD: env.DB_PASSWORD,
  DB_NAME: env.DB_NAME,
  SERVER_PORT: env.SERVER_PORT,
  SERVER_STORAGE: path.join(__dirname, '../..', `${env!.SERVER_STORAGE}`),
  SERVER_ADDRESS: env.SERVER_ADDRESS,
  MAIL_HOST: env.MAIL_HOST,
  MAIL_ADDR: env.MAIL_ADDR,
  MAIL_PASS: env.MAIL_PASS
};

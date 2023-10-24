// @ts-nocheck
import env from './config/env';
import { initializeDatasource } from './database/datasource';
import { createApp } from './config/app';
import { createServer } from './config/server';

const start = async () => {
  await initializeDatasource();
  const app = createApp();
  const server = createServer(app);

  server.listen(env.SERVER_PORT, () => {
    console.log(`Server initialized on port ${env.SERVER_PORT}`);
  });
};

start();

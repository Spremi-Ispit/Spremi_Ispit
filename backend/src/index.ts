// @ts-nocheck
import env from './config/env';
import { createApp } from './config/app';
import { createServer } from './config/server';
import { database } from './database/database';
import sockets from './config/sockets';

const start = async () => {
  await database();
  const app = createApp();
  const server = createServer(app);
  sockets(server);

  server.listen(env.SERVER_PORT, () => {
    console.log(`Server initialized on port ${env.SERVER_PORT}`);
  });
};

start();

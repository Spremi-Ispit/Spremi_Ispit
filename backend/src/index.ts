// @ts-nocheck
import env from './config/env';
import { createServer } from './config/server';
import { database } from './database/database';
import sockets from './config/sockets';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import apiLogger from './middleware/apiLogger';
import routes from './routes';

const start = async () => {
  await database();

  const app = express();
  app.use(cors());

  app.use('/backend/files', express.static(env.SERVER_STORAGE));
  app.use(bodyParser.json());
  app.use(apiLogger);

  routes(app);

  const server = createServer(app);
  sockets(server);

  server.listen(env.SERVER_PORT, () => {
    console.log(`Server initialized on port ${env.SERVER_PORT}`);
  });
};

start();

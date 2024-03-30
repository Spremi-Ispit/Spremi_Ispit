// @ts-nocheck
import https from 'https';
import http from 'http';
import fs from 'fs';
import env from './env';

const createHttpsServer = (app) => {
  const crtPath = 'src/config/spremiispit.crt';
  const keyPath = 'src/config/spremiispit.key';

  const httpsConfig = {
    key: fs.readFileSync(keyPath, 'utf8'),
    cert: fs.readFileSync(crtPath, 'utf8')
  };

  return https.createServer(httpsConfig, app);
};

const createHttpServer = (app) => {
  return http.createServer(app);
};

export const createServer = (app) => {
  const isHttps = JSON.parse(env.SERVER_HTTPS);

  if (isHttps) {
    return createHttpsServer(app);
  }

  return createHttpServer(app);
};

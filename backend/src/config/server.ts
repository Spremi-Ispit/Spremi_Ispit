// @ts-nocheck
import https from 'https';
import http from 'http';
import fs from 'fs';

const httpsServer = false;

const createHttpsServer = (app) => {
  const httpsConfig = {
    key: fs.readFileSync(
      '/home/spremiis/ssl/keys/b606f_c34f9_f88838d30fb65cc12ef04ff6932338e5.key',
      'utf8'
    ),
    cert: fs.readFileSync(
      '/home/spremiis/ssl/certs/spremiispit_com_b606f_c34f9_1688169599_e03e361ca79e3de9f795a57e1c609203.crt',
      'utf8'
    )
  };

  return https.createServer(httpsConfig, app);
};

const createHttpServer = (app) => {
  return http.createServer(app);
};

export const createServer = (app) => {
  if (httpsServer) {
    return createHttpsServer(app);
  }

  return createHttpServer(app);
};

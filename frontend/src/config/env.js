const env = JSON.parse(import.meta.env.VITE_CONFIG);

export default {
  API_KEY: env.API_KEY,
  AUTH_DOMAIN: env.AUTH_DOMAIN,
  PROJECT_ID: env.PROJECT_ID,
  STORAGE_BUCKET: env.STORAGE_BUCKET,
  MESSAGING_SENDER_ID: env.MESSAGING_SENDER_ID,
  APP_ID: env.APP_ID,
  MEASUREMENT_ID: env.MEASUREMENT_ID,
  BACKEND_URL: env.BACKEND_URL,
};

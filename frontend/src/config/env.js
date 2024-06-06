const env = import.meta.env;

export default {
  BACKEND_URL: env.VITE_BACKEND_URL,
  SOCKETS_URL: env.VITE_SOCKETS_URL,
};

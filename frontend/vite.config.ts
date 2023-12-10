import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
  ],
  server: {
    port: 3005,
    open: true,
  },
  preview: {
    port: 3005,
    open: true,
  },
  assetsInclude: ['**/*.docx'],
});

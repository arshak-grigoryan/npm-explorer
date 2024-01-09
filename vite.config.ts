import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';
  return {
    plugins: [svgr(), react(), checker({ typescript: true })],
    base: isDev ? '/' : '/npm-explorer/',
  };
});

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

const directoryIndexPlugin = () => ({
  name: 'directory-index',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url && req.url.endsWith('/') && req.url !== '/') {
        req.url = req.url + 'index.html';
      }
      next();
    });
  }
});

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), directoryIndexPlugin()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
        'react': path.resolve(__dirname, 'node_modules/react'),
        'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          composicao: path.resolve(__dirname, 'composicao-opa/index.html'),
          morrodacruz: path.resolve(__dirname, 'imovel-morro-da-cruz/index.html'),
          lancamento: path.resolve(__dirname, 'lancamento-opa/index.html'),
          siriuba2: path.resolve(__dirname, 'siriuba-2/index.html'),
        },
      },
    },
  };
});

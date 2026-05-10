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

/**
 * Converte <link rel="stylesheet" ...> em padrão non-blocking
 * (preload + onload swap) somente para o CSS principal do bundle siriuba-2.
 * Reduz "Render-blocking requests" no PageSpeed.
 */
const nonBlockingCssPlugin = () => ({
  name: 'non-blocking-css',
  enforce: 'post',
  transformIndexHtml(html, ctx) {
    if (!ctx.path?.includes('siriuba-2')) return html;
    // Apenas o stylesheet local do bundle (que começa com /assets/).
    // Ignora os links que já estão non-blocking (com media="print" / onload já presente).
    return html.replace(
      /<link rel="stylesheet"([^>]*?)href="(\/assets\/[^"]+\.css)"([^>]*?)>/g,
      (match, before, href, after) => {
        if (match.includes('media="print"') || match.includes('onload=')) return match;
        return (
          `<link rel="preload" as="style"${before}href="${href}"${after} onload="this.onload=null;this.rel='stylesheet'">` +
          `<noscript><link rel="stylesheet"${before}href="${href}"${after}></noscript>`
        );
      }
    );
  }
});

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), directoryIndexPlugin(), nonBlockingCssPlugin()],
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
      target: 'es2022',
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

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
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

// Cria copias do index.html do siriuba-2 nas rotas SPA, para o Vercel
// servir a URL diretamente em vez de retornar 404 antes do rewrite.
const siriuba2SpaRoutesPlugin = () => {
  const spaRoutes = ['obrigado'];
  return {
    name: 'siriuba2-spa-routes',
    apply: 'build' as const,
    closeBundle() {
      const sourceHtml = path.resolve(__dirname, 'dist/siriuba-2/index.html');
      if (!fs.existsSync(sourceHtml)) return;
      for (const route of spaRoutes) {
        const dir = path.resolve(__dirname, `dist/siriuba-2/${route}`);
        fs.mkdirSync(dir, { recursive: true });
        fs.copyFileSync(sourceHtml, path.join(dir, 'index.html'));
      }
    }
  };
};

/**
 * Mantém o CSS principal do siriuba-2 bloqueante (necessário para
 * evitar FOUC com Tailwind), mas adiciona um <link rel="preload">
 * antes pra o navegador começar a buscar o CSS o mais cedo possível.
 * Ganho menor que non-blocking total, mas zero risco de layout quebrado.
 */
const cssPreloadPlugin = () => ({
  name: 'css-preload',
  enforce: 'post',
  transformIndexHtml(html, ctx) {
    if (!ctx.path?.includes('siriuba-2')) return html;
    return html.replace(
      /<link rel="stylesheet"([^>]*?)href="(\/assets\/[^"]+\.css)"([^>]*?)>/g,
      (match, before, href, after) => {
        if (match.includes('rel="preload"')) return match;
        return (
          `<link rel="preload" as="style" href="${href}">` + match
        );
      }
    );
  }
});

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), directoryIndexPlugin(), cssPreloadPlugin(), siriuba2SpaRoutesPlugin()],
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

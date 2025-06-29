import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";
import path from 'path';
import { fileURLToPath } from 'url';


// Получаем `__dirname` в ESM-формате
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ReactCompilerConfig = {target: '19'};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react({
      babel: {
        plugins: [
          ["babel-plugin-react-compiler", ReactCompilerConfig],
        ],
      },
    }), 
    svgr({
      include: "**/*.svg",
      exportAsDefault: true,
    }),
  ],
  base: '/',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  define: {
    global: 'window',
  },
  optimizeDeps: {
    include: ['styled-components'],
  },
})

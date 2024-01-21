import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  root: '.',
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    emptyOutDir: false,
    outDir: 'dist',
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/components/index.ts'),
      name: 'ts-vue-components',
      formats: ['es', 'cjs'],
      fileName: (format) => `ts-vue-components.${format}.js`,
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/components/index.ts'),
      },
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  preview: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'rfs': resolve(__dirname, 'node_modules/rfs'),
      'scss': resolve(__dirname, 'src/assets/scss'),
      'bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
      'primevue': resolve(__dirname, 'node_modules/primevue'),
      'remixicon': resolve(__dirname, 'node_modules/remixicon'),
    },
  },
});

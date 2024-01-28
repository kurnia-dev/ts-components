import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  root: '.',
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
    istanbul({
      include: 'src/*',
      exclude: ['node_modules', 'test/'],
      extension: ['.js', '.ts', '.vue'],
      requireEnv: false,
    }),
  ],
  build: {
    emptyOutDir: false,
    outDir: 'dist',
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/components/index.ts'),
      name: 'ts-vue-components',
      formats: ['es', 'cjs', 'umd'],
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
      'lib': resolve(__dirname, 'src/components/lib'),
      'rfs': resolve(__dirname, 'node_modules/rfs'),
      'var': resolve(__dirname, 'src/assets/var.scss'),
      'assets': resolve(__dirname, 'src/assets'),
      'bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
      'primevue': resolve(__dirname, 'node_modules/primevue'),
      'remixicon': resolve(__dirname, 'node_modules/remixicon'),
    },
  },
});

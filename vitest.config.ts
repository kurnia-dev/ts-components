import { resolve } from 'path';
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      coverage: {
        reporter: ['text'],
      },
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: resolve(__dirname),
    },
  }),
);

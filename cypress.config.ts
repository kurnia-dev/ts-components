import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'b2yz2p',
  e2e: {
    baseUrl: 'http://localhost:5173',
    specPattern: 'cypress/e2e/**/*.cy.spec.{js,jsx,ts,tsx}',
    supportFile: false,
  },
  component: {
    specPattern: 'src/**/*.cy.spec.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/component.ts',
    devServer: {
      baseUrl: 'http://localhost:5173',
      framework: 'vue',
      bundler: 'vite',
    },
  },
});

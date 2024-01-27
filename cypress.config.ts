import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'b2yz2p',
  e2e: {
    specPattern: '**/unit/*.cy.spec.{js,jsx,ts,tsx}',
    supportFile: false,
  },
  component: {
    specPattern: 'src/**/*.cy.spec.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/component.ts',
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
  },
});

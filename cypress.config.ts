import { defineConfig } from 'cypress';
import Task from '@cypress/code-coverage/task';
import reporter from 'cypress-mochawesome-reporter/plugin';

export default defineConfig({
  projectId: 'b2yz2p',
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    specPattern: '**/unit/*.cy.spec.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.ts',
    setupNodeEvents(on) {
      reporter(on);
    },
  },
  component: {
    specPattern: 'src/**/*.cy.spec.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/component.ts',
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
    setupNodeEvents(on, config) {
      Task(on, config);

      return config;
    },
  },
  env: {
    codeCoverage: {
      url: '/__coverage__',
      coverageFolder: 'coverage',
      reportDir: 'coverage',
    },
  },
});

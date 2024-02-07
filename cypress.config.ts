import { defineConfig } from 'cypress';
import Task from '@cypress/code-coverage/task';

export default defineConfig({
  projectId: 'b2yz2p',
  reporter: 'cypress-mochawesome-reporter',
  viewportWidth: 1366,
  viewportHeight: 720,
  e2e: {
    baseUrl: 'http://localhost:8080',
    specPattern: 'cypress/e2e/**/*.cy.spec.ts',
    supportFile: 'cypress/support/e2e.ts',
    setupNodeEvents(on, config) {
      Task(on, config);

      return config;
    },
    experimentalRunAllSpecs: true,
  },
  component: {
    specPattern: 'src/**/*.cy.spec.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/component.ts',
    watchForFileChanges: false,
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

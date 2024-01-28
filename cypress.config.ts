import { defineConfig } from 'cypress';
import Task from '@cypress/code-coverage/task';
import reporter from 'cypress-mochawesome-reporter/plugin';

export default defineConfig({
  projectId: 'b2yz2p',
  reporter: 'cypress-mochawesome-reporter',
  viewportWidth: 720,
  viewportHeight: 480,
  e2e: {
    specPattern: '**/unit/*.cy.spec.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.ts',
    setupNodeEvents(on, config) {
      Task(on, config);
      reporter(on);

      return config;
    },
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
      reporter(on);

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

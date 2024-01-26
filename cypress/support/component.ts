/// <reference types="cypress" />
import { App, DefineComponent } from 'vue';
import { mount } from '@cypress/vue';
import PrimeVue from 'primevue/config';

import 'primeicons/primeicons.css';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/lara-light-blue/theme.css';
import 'remixicon/fonts/remixicon.css';
import 'assets/main.css';
import 'assets/app.scss';

Cypress.Commands.add('mount', (component: DefineComponent, options = {}) => {
  options.global = options.global || {};
  options.global.stubs = options.global.stubs || {};
  options.global.stubs['transition'] = false;
  options.global.components = options.global.components || {};
  options.global.plugins = options.global.plugins || [];

  options.global.plugins.push({
    install(app: App) {
      app.use(PrimeVue);
    },
  });

  return mount(component, options);
});

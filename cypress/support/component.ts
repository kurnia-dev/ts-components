/* eslint-disable vue/multi-word-component-names */
/// <reference types="cypress" />
import type { App, DefineComponent } from 'vue';
import { mount } from '@cypress/vue';
import '@cypress/code-coverage/support';

import 'primeicons/primeicons.css';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/lara-light-blue/theme.css';
import '../../src/components/lib/button/style/TSButton.scss';
import 'remixicon/fonts/remixicon.css';
import 'assets/main.css';
import 'assets/app.scss';

import PrimeVue from 'primevue/config';
import Calendar from 'primevue/calendar';
import TSCalendar from '../../src/components/lib/calendar/TSCalendar.vue';
import TSInputText from '../../src/components/lib/inputtext/TSInputText.vue';
import TSForm from '../../src/components/lib/tsform/TSForm.vue';
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';

Cypress.Commands.add('mount', (component: DefineComponent, options = {}) => {
  options.global = options.global || {};
  options.global.stubs = options.global.stubs || {};
  options.global.stubs['transition'] = false;
  options.global.components = options.global.components || {};
  options.global.plugins = options.global.plugins || [];

  options.global.plugins.push({
    install(app: App) {
      app.use(PrimeVue);

      app.component('Calendar', Calendar);
      app.component('TSCalendar', TSCalendar);
      app.component('TSInputText', TSInputText);
      app.component('TSForm', TSForm);
      app.component('InputText', InputText);
      app.component('Checkbox', Checkbox);
    },
  });

  return mount(component, options);
});

after(() => {
  cy.task('coverageReport');
});

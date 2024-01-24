import type { App } from 'vue';
import TSButton from './button/TSButton.vue';
import TSInputText from './lib/inputtext/TSInputText.vue';

export default {
  install: (app: App): void => {
    app.component('TSButton', TSButton);
    app.component('TSInputText', TSInputText);
  },
};

export { TSButton, TSInputText };

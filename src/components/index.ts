import type { App } from 'vue';
import TSButton from './button/TSButton.vue';

export default {
  install: (app: App): void => {
    app.component('TSButton', TSButton);
  },
};

export { TSButton };

import type { App } from 'vue';
import PrimeVue from 'primevue/config';
import TSButton from './button/TSButton.vue';
import TSInputText from './lib/inputtext/TSInputText.vue';
import SelectGroup from './lib/selectgroup/SelectGroup.vue';
import GroupTree from './lib/grouptree/GroupTree.vue';

export default {
  install: (app: App): void => {
    app.use(PrimeVue);

    app.component('TSButton', TSButton);
    app.component('TSInputText', TSInputText);
    app.component('SelectGroup', SelectGroup);
    app.component('GroupTree', GroupTree);
  },
};

export { TSButton, TSInputText, SelectGroup, GroupTree };

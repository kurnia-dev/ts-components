import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'primeicons/primeicons.css';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/lara-light-blue/theme.css';
import 'remixicon/fonts/remixicon.css';
import '../src/assets/main.css';

import CodeBlock from '@/components/codeblock/CodeBlock.vue';

import Button from 'primevue/button';
import Calendar from 'primevue/calendar';
import Checkbox from 'primevue/checkbox';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import InlineMessage from 'primevue/inlinemessage';
import Menu from 'primevue/menu';
import MultiSelect from 'primevue/multiselect';
import TabMenu from 'primevue/tabmenu';
import TabPanel from 'primevue/tabpanel';
import Tree from 'primevue/tree';

import PrimeVue from 'primevue/config';

const app = createApp(App);

app.component('Button', Button);
app.component('Calendar', Calendar);
app.component('Checkbox', Checkbox);
app.component('CodeBlock', CodeBlock);
app.component('Column', Column);
app.component('DataTable', DataTable);
app.component('Dialog', Dialog);
app.component('Dropdown', Dropdown);
app.component('InputText', InputText);
app.component('InlineMessage', InlineMessage);
app.component('Menu', Menu);
app.component('MultiSelect', MultiSelect);
app.component('TabMenu', TabMenu);
app.component('TabPanel', TabPanel);
app.component('Tree', Tree);

app.use(PrimeVue);
app.use(router);

app.mount('#app');

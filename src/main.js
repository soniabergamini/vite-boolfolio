import { createApp } from 'vue';
import './variables.scss';
import {routes} from './router';
import App from './App.vue';

createApp(App).use(routes).mount('#app')

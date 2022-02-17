require('./bootstrap');

import Alpine from 'alpinejs';

import { createApp } from 'vue';

import router from './router/index'

import CompanyIndex from './components/companies/CompanyIndex.vue'

window.Alpine = Alpine;

Alpine.start();

createApp({
    components: {
        CompanyIndex
    }
}).use(router).mount('#app');
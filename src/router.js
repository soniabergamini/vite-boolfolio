// 1. Define & import route components

import { createRouter, createWebHistory } from "vue-router";
import AppHomepage from './pages/AppHomepage.vue';
import AppProjects from './pages/AppProjects.vue';

// 2. Define router & routes. Each route maps to a component.
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: AppHomepage, name: 'homepage' },
        { path: '/projects', component: AppProjects, name: 'projects' },
    ]
})


export {router}
// 1. Define & import route components

import { createRouter, createWebHistory } from "vue-router";
import AppHomepage from './pages/AppHomepage.vue';
import AppProjects from './pages/AppProjects.vue';

// 2. Define routes. Each route maps to a component.
const routes = [
    { path: '/', component: AppHomepage, name: 'homepage' },
    { path: '/projects', component: AppProjects, name: 'projects' },
]

// 3. Create the router instance with Web History. 
const router = createRouter({
    history: createWebHistory(), routes
}) 

export {routes}
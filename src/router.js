// 1. Define & import route components
import { createRouter, createWebHistory } from "vue-router";
import AppHomepage from './pages/AppHomepage.vue';
import AppProjects from './pages/AppProjects.vue';
import AppError from './pages/AppError.vue';
import AppShowProject from './pages/AppShowProject.vue';

// 2. Define router & routes. Each route maps to a component.
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: AppHomepage, name: 'homepage' },
        { path: '/projects', component: AppProjects, name: 'projects' },
        { path: '/projects/:id', component: AppShowProject, name: 'show-projects' },
        { path: '/error/:code', component: AppError, name: 'error' },
    ]
})

export {router}
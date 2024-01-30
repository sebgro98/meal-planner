// router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/presenters/HomePresenter.vue';
import MealView from '@/presenters/MealPresenter.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/meal/:name',
            name: 'mealView',
            component: MealView,
            props: true,
        },

    ],
});

export default router;

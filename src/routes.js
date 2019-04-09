import Main from './components/screens/main/Main.vue';

export const routes = [
    {
        path: '*',
        redirect: '/',
    },  
    {
        path: '/',
        name: "root",
        component: () => import('./components/screens/main/Main.vue')
    },  
]
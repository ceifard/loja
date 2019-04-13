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
    {
        path: '/unavailable',
        name: "unavailable",
        component: () => import('./components/screens/unavailable/Unavailable.vue')
    },        
]
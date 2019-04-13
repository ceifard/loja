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
        path: '/onlineshopping',
        name: "onlineshopping",
        component: () => import('./components/screens/online-shopping/OnlineShopping.vue'),
        meta: {
            requiresAuth: true
        }              
    },        
]
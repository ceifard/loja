import Vue from 'vue'

//Imports relativos ao Vue Router
import VueRouter from 'vue-router';
import { routes } from './routes';
Vue.use(VueRouter);
export const router = new VueRouter({
  routes
});

//Imports relativos ao VueX
import store from './store' 

//Imports relativos ao plugin Vuetify e estilos do tema.
import './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) },
}).$mount('#app')

router.beforeResolve((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth) //check if, in the route that we're being redirected, contains the meta "requiresAuth" setted on routes of routes.js
  const currentUser = store.getters.userLogged  //check if there's a logged user. If true, returns the user. Else, returns null.

  if (requiresAuth && !currentUser) { //if the route that we are navigating requires authentication and there's no user logged, redirect to main page
      next('root') 
  } else { //else, proceed with navigation
      next()
  }

})

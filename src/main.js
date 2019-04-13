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

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth) //checa se, na rota que estamos sendo direcionados, há o meta "requiresAuth" setado nas rotas de routes.js
  const currentUser = store.getters.userLogged  //checa se tem usuario logado, se tiver retorna o usuario, se nao tiver retorna null

  if (requiresAuth && !currentUser) {  //se a rota que estamos navegando requer autenticação e nao há usuário logado, redirecionamos para a pagina principal
      next('root') 
  } else { //senão, deixamos a navegação prosseguir
      next()
  }

})

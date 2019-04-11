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

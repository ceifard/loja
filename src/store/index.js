import Vue from 'vue'
import Vuex from 'vuex'

import signup from './modules/signup'
import signin from './modules/signin'

Vue.use(Vuex)

const state = {
  loading: false,
  message: {type: '', text: ''},
  userLogged: {}
}

const getters = {
  loading: state => state.loading,
  message: state => state.message,
  userLogged: state => state.userLogged,
}

const mutations = { 
  loading(state, obj) {
      state.loading = obj;
  },
  message(state, obj) {
      state.message = obj;
  }, 
  userLogged(state, obj) {
    state.userLogged = obj;
  },              
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    modules: {
        signup,
        signin
    }
  })

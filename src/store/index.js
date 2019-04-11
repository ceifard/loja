import Vue from 'vue'
import Vuex from 'vuex'

import signup from './modules/signup'
import signin from './modules/signin'

Vue.use(Vuex)

const state = {
  carregando: false,
  mensagem: {tipo: '', texto: ''},
}

const getters = {
  carregando: state => state.carregando,
  mensagem: state => state.mensagem,
}

const mutations = { 
  carregando(state, obj) {
      state.carregando = obj;
  },
  mensagem(state, obj) {
      state.mensagem = obj;
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

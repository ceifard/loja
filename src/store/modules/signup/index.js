import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

const state = {
    dialogShowing: false,
    userName: '',
    email: '',
    phone: '',
    password: '',
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
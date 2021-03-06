import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

const state = {
    dialogShowing: false,
    user: {
        userName: '',
        email: '',
        phone: '',
        password: '', 
        createdAt: '',       
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
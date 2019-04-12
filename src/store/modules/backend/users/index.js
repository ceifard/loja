import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

const state = {
    users: []
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
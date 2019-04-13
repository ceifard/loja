export const login = ({getters, dispatch}) => {
    //logging in user in the "backend"
    return dispatch('users/login', {...getters.user}, {root:true})
}
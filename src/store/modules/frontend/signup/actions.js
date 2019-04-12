export const signUp = ({getters, dispatch}) => {
    return dispatch('users/addUser', {...getters.user}, {root:true})
}
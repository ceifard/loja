export const signUp = ({getters, dispatch}) => {
    //adding user in the "backend"
    return dispatch('users/addUser', {...getters.user}, {root:true})
}
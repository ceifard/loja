export const signUp = ({getters, dispatch}) => {
    //adding user in the "backend"
    let user = {...getters.user};
    user.createdAt = new Date().toLocaleDateString()
    return dispatch('users/addUser', user, {root:true})
}
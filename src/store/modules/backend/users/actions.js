export const addUser = ({commit}, user) => {
    return new Promise( (resolve) => {
        setTimeout(() => {
            user['id'] = Math.floor(Math.random() * 20000000000000000)
            commit('addUser', user);
            resolve(user);
        }, 1500);       
    })
}
export const addUser = ({commit}, user) => {
    return new Promise( (resolve) => {
        setTimeout(() => {
            user['id'] = Math.floor(Math.random() * 20000000000000000)
            commit('addUser', user);
            resolve(user);
        }, 1500);       
    })
}

export const login = ({getters}, user) => {
    return new Promise( (resolve) => {
        setTimeout(() => {
            let userFound = getters.users.find( existingUser => {
                return (existingUser.email == user.email && existingUser.password == user.password)
            } )
            resolve(userFound || false);
        }, 1500);       
    })
}
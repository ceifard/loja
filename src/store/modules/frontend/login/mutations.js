export function dialogShowing (state, value) {
    state.dialogShowing = value
}

export function user (state, value) {
    state.user = value
}

export function email (state, value) {
    state.user.email = value
}

export function password (state, value) {
    state.user.password = value
}
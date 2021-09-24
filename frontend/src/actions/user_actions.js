import * as user_api_util from '../util/user_api_util'

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS"
export const RECEIVE_USER = "RECEIVE_USER"

export const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
})

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const fetchUsers = () => dispatch => (
    user_api_util.fetchUsers()
        .then(users => dispatch(receiveAllUsers(users)))
)

export const fetchUser = (user) => dispatch => {
    return user_api_util.fetchUser(user)
        .then(user => dispatch(receiveUser(user)))
}



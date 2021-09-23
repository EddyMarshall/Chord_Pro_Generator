import * as user_api_util from '../util/user_api_util'

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS"

export const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
})

export const fetchUsers = () => dispatch => (
    user_api_util.fetchUsers()
        .then(users => dispatch(receiveAllUsers(users)))
)


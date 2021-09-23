import { RECEIVE_ALL_USERS } from '../actions/user_actions';

const UsersReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_USERS:
            return action.users.data;
        default:
            return oldState;
    }   
}

export default UsersReducer
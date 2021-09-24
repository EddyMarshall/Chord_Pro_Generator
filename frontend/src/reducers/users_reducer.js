import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/user_actions';

const UsersReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_USERS:
            return action.users.data;
        case RECEIVE_USER:
            nextState[action.user.data._id] = action.user.data;
            return nextState;
        default:
            return oldState;
    }   
}

export default UsersReducer
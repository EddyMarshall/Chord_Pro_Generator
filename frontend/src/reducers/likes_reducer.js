import { RECEIVE_LIKES, RECEIVE_USER_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';

const LikesReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let nextState = { ...oldState };
    switch (action.type) {
        case RECEIVE_LIKES:
            return action.likes.data;
        // case RECEIVE_USER_LIKES:
        //     nextState.user = action.likes.data;
        //     return nextState;
        case RECEIVE_LIKE:
            nextState[action.like.data._id] = action.like.data;
            return nextState;
        case REMOVE_LIKE:
            delete nextState[action.like.data._id];
            return nextState;
        default:
            return oldState;
    }
};

export default LikesReducer;
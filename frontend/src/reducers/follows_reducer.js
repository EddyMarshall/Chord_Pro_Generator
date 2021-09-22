// // import { RECEIVE_FOLLOWS, RECEIVE_USER_FOLLOWS, RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';

// const FollowsReducer = (oldState = [], action) => {
//     Object.freeze(oldState);
//     let nextState = {...oldState};
//     switch (action.type) {
//         case RECEIVE_FOLLOWS:
//             return action.follows.data;
//         // case RECEIVE_USER_FOLLOWS:
//         //     nextState.user = action.follows.data;
//         //     return nextState;
//         case RECEIVE_FOLLOW:
//             nextState.push = action.follow.data
//             return nextState;
//         case REMOVE_FOLLOW:
//             let deleted = nextState.filter(follow => follow._id != action.followId)
//             return deleted;
//         default:
//             return oldState;
//     }
// };

// export default FollowsReducer;
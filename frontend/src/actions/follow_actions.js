import * as follow_api_util from '../util/follow_api_util'

export const RECEIVE_FOLLOWS = "RECEIVE_FOLLOWS";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const RECEIVE_USER_FOLLOWS = "RECEIVE_USER_FOLLOWS";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

export const receiveFollows = follows => ({
    type: RECEIVE_FOLLOWS,
    follows
});

export const receiveFollow = follow => ({
    type: RECEIVE_FOLLOW,
    follow
});

export const receiveUserFollows = follows => ({
    type: RECEIVE_USER_FOLLOWS,
    follows
});

export const removeFollow = followId => ({
    type: REMOVE_FOLLOW,
    followId
});

export const followUser = follow => dispatch => (
    follow_api_util.followUser(follow)
        .then((follow => dispatch(receiveFollow(follow))))
        .catch(error => console.log(error))
);

export const unfollowUser = followId => dispatch => (
    follow_api_util.unfollowUser(followId)
        .then(() => dispatch(removeFollow(followId)))
);

export const getUserFollows = userId => dispatch => (
    follow_api_util.getUserFollows(userId)
        .then((follows) => dispatch(receiveUserFollows(follows)))
);
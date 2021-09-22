import * as follow_api_util from '../util/follow_api_util'

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW"
export const REMOVE_FOLLOW = "REMOVE_FOLLOW"

export const receiveFollow = follow => ({
    type: RECEIVE_FOLLOW,
    follow
})

export const removeFollow = followId => ({
    type: REMOVE_FOLLOW,
    followId
})

export const followUser = follow => dispatch => (
    follow_api_util.followUser(follow)
        .then((follow => dispatch(receiveFollow(follow))))
        .catch(error => console.log(error))
)

export const unfollowUser = followId => dispatch => (
    follow_api_util.removeFollow(followId)
        .then(() => dispatch(removeFollow(followId)))
)
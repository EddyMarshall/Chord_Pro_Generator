import * as like_api_util from '../util/like_api_util'

export const RECEIVE_LIKE = "RECEIVE_LIKE"
export const REMOVE_LIKE = "REMOVE_LIKE"

export const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
})

export const removeLike = likeId => ({
    type: REMOVE_LIKE,
    likeId
})

export const likeSong = like => dispatch => (
    like_api_util.likeSong(like)
        .then((like => dispatch(receiveLike(like))))
        .catch(error => console.log(error))
)

export const unlikeSong = likeId => dispatch => (
    like_api_util.unlikeSong(likeId)
        .then(() => dispatch(removeLike(likeId)))
)
import * as like_api_util from '../util/like_api_util';

export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_SONG_LIKES = "RECEIVE_SONG_LIKES";

export const receiveLikes = likes => ({
    type: RECEIVE_LIKES,
    likes
});

export const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
});

export const receiveSongLikes = likes => ({
    type: RECEIVE_SONG_LIKES,
    likes
});

export const removeLike = likeId => ({
    type: REMOVE_LIKE,
    likeId
});

export const likeSong = like => dispatch => (
    like_api_util.likeSong(like)
        .then((like => dispatch(receiveLike(like))))
        .catch(error => console.log(error))
);

export const getSongLikes = (songId) => (dispatch) => (
    like_api_util.getSongLikes(songId)
        .then((likes) => dispatch(receiveSongLikes(likes)))
        .catch(error => console.log(error))
);

export const unlikeSong = likeId => dispatch => (
    like_api_util.unlikeSong(likeId)
        .then(() => dispatch(removeLike(likeId)))
);
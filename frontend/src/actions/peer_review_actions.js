import * as peerReview_api_util from '../util/peerReview_api_util'

export const RECEIVE_ALL_PEERREVIEWS = "RECEIVE_ALL_PEERREVIEWS"
export const RECEIVE_PEERREVIEW = "RECEIVE_PEERREVIEW"
export const RECEIVE_SONG_REVIEWS = "RECEIVE_SONG_REVIEWS"
export const REMOVE_PEERREVIEW = "REMOVE_PEERREVIEW"

export const receiveAllPeerReviews = (peerReviews) => ({
    type: RECEIVE_ALL_PEERREVIEWS,
    peerReviews
});

export const receivePeerReview = peerReview => ({
    type: RECEIVE_PEERREVIEW,
    peerReview
});

export const receiveSongReviews = reviews => ({
    type: RECEIVE_SONG_REVIEWS,
    reviews
});

export const removePeerReview = peerReviewId => ({
    type: REMOVE_PEERREVIEW,
    peerReviewId
});

export const fetchPeerReviews = () => dispatch => (
    peerReview_api_util.getPeerReviews()
        .then(peerReviews => dispatch(
            receiveAllPeerReviews(
                peerReviews
            )
        )
    )
);

export const fetchSongReviews = (songId) => dispatch => (
    peerReview_api_util.getSongReviews(songId)
        .then(reviews => dispatch(
            receiveSongReviews(
                reviews
            )
        )
        )
);

export const createPeerReview = peerReview => dispatch => (
    peerReview_api_util.createPeerReview(peerReview)
        .then((peerReview => dispatch(receivePeerReview(peerReview))))
        .catch(error => console.log(error))
);

export const updatePeerReview = peerReview => dispatch => (
    peerReview_api_util.updatePeerReview(peerReview)
        .then((peerReview) => dispatch(receivePeerReview(peerReview)))
        .catch(error => console.log(error))
);

export const deletePeerReview = peerReviewId => dispatch => (
    peerReview_api_util.deletePeerReview(peerReviewId)
        .then(() => dispatch(deletePeerReview(peerReviewId)))
);
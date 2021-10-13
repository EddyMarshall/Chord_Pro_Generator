import axios from 'axios';

export const getPeerReviews = () => {
    return axios.get(
        '/api/peer_reviews'
    )
};

export const getSongReviews = (songId) => {
    return axios.get(
        `/api/peer_reviews/song/${songId}`
    )
};

export const createPeerReview = data => {
    return axios.post(
        '/api/peer_reviews',
        data
    )
};

export const updatePeerReview = peerReview => {
    return axios.put(
        `/api/peer_reviews/${peerReview._id}`,
        peerReview
    )
};

export const deletePeerReview = peerReviewId => {
    return axios.delete(
        `/api/peer_reviews/${peerReviewId}`
    )
};


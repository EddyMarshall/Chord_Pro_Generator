import axios from 'axios';

export const getPeerReviews = () => {
    return axios.get(
        '/api/peerreviews'
    )
}

export const createPeerReview = data => {
    return axios.post(
        '/api/peerreviews',
        data
    )
}

export const updatePeerReview = peerReview => {
    return axios.patch(
        `/api/peerreviews/${peerReview.id}`
    )
}

export const deletePeerReview = peerReviewId => {
    return axios.destroy(
        `/api/peerreviews/${peerReviewId}`
    )
}


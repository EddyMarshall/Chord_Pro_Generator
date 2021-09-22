import axios from 'axios';

export const getPeerReviews = () => {
    return axios.get(
        '/api/peerreviews'
    )
}

export const writePeerReview = data => {
    return axios.post(
        '/api/peerreviews',
        data
    )
}

export const updatePeerReview = review => {
    return axios.patch(
        `/api/peerreviews/${review.id}`
    )
}

export const deletePeerReview = peerReviewId => {
    return axios.destroy(
        `/api/peerreviews/${peerReviewId}`
    )
}


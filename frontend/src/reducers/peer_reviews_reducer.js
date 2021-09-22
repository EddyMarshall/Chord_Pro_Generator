import { RECEIVE_PEERREVIEW, RECEIVE_ALL_PEERREVIEWS, REMOVE_PEERREVIEW } from '../actions/peer_review_actions';

const PeerReviewsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let nextState = { ...oldState };
    switch (action.type) {
        case RECEIVE_ALL_PEERREVIEWS:
            return action.peerReviews.data;
        case RECEIVE_PEERREVIEW:
            nextState[action.peerReview.data._id] = action.peerReview.data;
            return nextState;
        case REMOVE_PEERREVIEW:
            delete nextState[action.peerReview.data._id];
            return nextState;
        default:
            return oldState;
    }
};

export default PeerReviewsReducer;
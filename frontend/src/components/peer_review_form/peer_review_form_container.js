import { connect } from 'react-redux';
import PeerReviewForm from './peer_review_form';
import { createPeerReview, fetchPeerReviews } from '../../actions/peer_review_actions';

const mSTP = (state, ownProps) => {
    return {
        reviewer_id: state.session.user.id,
        parent_song_id: ownProps.match.params.songId,
        reviews: Object.values(state.entities.peerReviews)
    }
};

const mDTP = dispatch => ({
    createPeerReview: (peerReview) => dispatch(createPeerReview(peerReview)),
    fetchPeerReviews: () => dispatch(fetchPeerReviews())
});

export default connect(mSTP, mDTP)(PeerReviewForm);
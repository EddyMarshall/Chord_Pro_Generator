import { connect } from 'react-redux';
import PeerReviewForm from './peer_review_form';
import { createPeerReview, fetchPeerReviews } from '../../actions/peer_review_actions';
import { fetchUsers } from '../../actions/user_actions'


const mSTP = (state, ownProps) => {
    // debugger
    return {
        reviewer_id: state.session.user.id,
        parent_song_id: ownProps.songId,
        reviews: Object.values(state.entities.peerReviews),
        users: Object.values(state.entities.users)
    }
};

const mDTP = dispatch => ({
    createPeerReview: (peerReview) => dispatch(createPeerReview(peerReview)),
    fetchPeerReviews: () => dispatch(fetchPeerReviews()),
    fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mSTP, mDTP)(PeerReviewForm);
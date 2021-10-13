import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePeerReview, updatePeerReview } from '../../actions/peer_review_actions';

class PeerReviewItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            edit: false,
            body: this.props.review.body
        }
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit(review) {
        console.log("EDITED");
        review.body = this.state.body;
        this.props.updatePeerReview(review);
        this.setState({ edit: false });
    }

    usernameGrabber(users, review) {
        let reviewerName = ""
        let i = 0;
        while (i < users.length) {
            if (users[i]._id === review.reviewer) {
                reviewerName = users[i].handle
                i += users.length
            } else {
                i += 1
            }
        }

        if (reviewerName === "") {
            reviewerName = "Anonymous"
        }
        return reviewerName
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        };
    };

    render() {
        let deleteButton = null;
        let editButton = null;
        let saveButton = null;
        if (this.props.review.reviewer === this.props.reviewer_id) {
            deleteButton = <button onClick={() => this.props.deletePeerReview(this.props.review._id)} className="delete-post">DELETE POST</button>;
            editButton = <button onClick={() => this.setState({ edit: true })} className="delete-post">EDIT POST</button>;
            saveButton = <button onClick={() => this.handleEdit(this.props.review)} className="delete-post">SAVE POST</button>;
        }
        return <li key={this.props.review._id} className="review-item">
            <Link to={`/users/${this.props.review.reviewer}`} className="review-username">
                {this.usernameGrabber(this.props.users, this.props.review)}
            </Link>
            {this.state.edit ?
                <textarea
                    className="song-edit-form2 review"
                    value={this.state.body}
                    onChange={this.update('body')}
                /> :
            <div className="review-body">
                {this.props.review.body}
            </div>}
            <div>
                {this.state.edit ? saveButton : editButton}
                {deleteButton}
            </div>
            
        </li>
        
    }

}

const mSTP = (state, ownProps) => {
    return {
        reviewer_id: state.session.user.id,
        reviews: Object.values(state.entities.peerReviews),
        users: Object.values(state.entities.users)
    }
};

const mDTP = dispatch => ({
    // createPeerReview: (peerReview) => dispatch(createPeerReview(peerReview)),
    // fetchPeerReviews: () => dispatch(fetchPeerReviews()),
    // fetchSongReviews: (songId) => dispatch(fetchSongReviews(songId)),
    // fetchUsers: () => dispatch(fetchUsers()),
    deletePeerReview: (reviewId) => dispatch(deletePeerReview(reviewId)),
    updatePeerReview: (peerReview) => dispatch(updatePeerReview(peerReview))
});

export default connect(mSTP, mDTP)(PeerReviewItem);
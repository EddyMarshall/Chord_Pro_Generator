import React from 'react'
import { Link } from 'react-router-dom';
import  PeerReviewItem from './peer_review_item';

class PeerReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { body: "" }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchSongReviews(this.props.parent_song_id);
        this.props.fetchUsers();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let review = {
            body: this.state.body,
            parent_song: this.props.parent_song_id,
            reviewer: this.props.reviewer_id
        }
        this.setState({body: ""});
        this.props.createPeerReview(review);
    }


    render() {
        const peerReviewList = (this.props.reviews.length != 0) ? (
            <ul>
                {this.props.reviews.map((review) => (
                    <PeerReviewItem review={review} parent_song={this.props.parent_song_id} key={review._id}/>
                ))}
            </ul>
        ) : (
            <div className="no-reviews-announcement">No review yet, you can be the first!</div>
        )

        return (
            <div className="peer-review-container">
                <div className="peer-review-container-proper">

                <h1 className="peer-review-header">Peer Reviews:</h1>
                    {peerReviewList}
                    <form onSubmit={this.handleSubmit} className="review-form-container">
                        <textarea 
                            onChange={this.update('body')} 
                            placeholder="Share your thoughts..."
                            className="peer-review-input"
                            value={this.state.body}
                        ></textarea>
                        <input 
                        type="submit" 
                        className="peer-review-submit"
                        />
                    </form>
                </div>
            </div>
        )
    }
}

export default PeerReviewForm;
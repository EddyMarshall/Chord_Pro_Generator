import React from 'react'
import { Link } from 'react-router-dom';

class PeerReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { body: "" }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        console.log(this.props.parent_song_id);
        this.props.fetchSongReviews(this.props.parent_song_id);
        this.props.fetchUsers();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        let review = {
            body: this.state.body,
            parent_song: this.props.parent_song_id,
            reviewer: this.props.reviewer_id
        }
        console.log(review);
        this.props.createPeerReview(review);
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

    render() {

        const peerReviewList = (this.props.reviews.length != 0) ? (
            <ul>
                {this.props.reviews.map((review) => {
                    return <li key={review._id} className="review-item">
                        <Link to={`users/${review.reviewer}`} className="review-username">
                            {this.usernameGrabber(this.props.users, review)}
                        </Link>
                        <div className="review-body">
                            {review.body}
                        </div>
                    </li>
                })}
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
                            placeholder="Share your thoughts."
                            className="peer-review-input"    
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
import React from 'react'

class PeerReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { body: "" }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchPeerReviews();
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
        return (
            <div className="peer-review-container">
                <div className="peer-review-container-proper">

                <h1 className="peer-review-header">Peer Reviews:</h1>
                <ul>
                    {this.props.reviews.map((review) => {
                        return <li key={review._id}>
                            <div className="review-username">
                                {this.usernameGrabber(this.props.users, review)}
                            </div>
                            <div className="review-body">    
                                {review.body}
                            </div>
                        </li>
                    })}
                </ul>
                    <form onSubmit={this.handleSubmit}>
                        <textarea onChange={this.update('body')} placeholder="Share your thoughts."></textarea>
                        <input type="submit" />
                    </form>
                </div>
            </div>
        )
    }
}

export default PeerReviewForm;
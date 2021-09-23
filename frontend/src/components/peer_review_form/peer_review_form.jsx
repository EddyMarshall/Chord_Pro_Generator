import React from 'react'

class PeerReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchPeerReviews();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }


    //form update and submit functions
    handleSubmit(e) {
        let review = {
            body: this.state.body,
            parent_song: this.props.parent_song_id,
            reviewer: this.props.reviewer_id
        }
        console.log(review);
        this.props.createPeerReview(review);
    }



    render() {
        return (
            <div>
                Hello, from the Peer Review Form.
                ----------------------
                <ul>
                    {this.props.reviews.map((review) => {
                        return <li key={review._id}>{review.body}</li>
                    })}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <textarea onChange={this.update('body')} placeholder="Enter review here."></textarea>
                    <input type="submit" />
                </form>
            </div>
        )
    }


}

export default PeerReviewForm;
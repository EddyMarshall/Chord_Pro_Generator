import React from 'react';
import { connect } from 'react-redux';

class LikeButton extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // this.props.getSongLikes(this.props.songId);
    }

    render() {

        let button = null;
        let likes = Object.values(this.props.likes);
        button = <input type="button" value="like" className="like-button"/>;
        for (let i = 0; i < likes.length; i++) {
            const like = likes[i];
            if(like.liker === this.props.currentUser){
                button = <input type="button" value="unlike" className="unlike-button"/>;
            }
        }

        return (
            <div className="like-button-div">
                {button}
            </div>
        )
    }
}

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.session.user.id,
        likes: state.entities.likes
    }
};

const mDTP = dispatch => {
    return {
    }
};

export default connect(mSTP, mDTP)(LikeButton);
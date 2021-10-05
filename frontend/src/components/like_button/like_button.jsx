import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {getSongLikes, likeSong, unlikeSong} from '../../actions/like_actions';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleLike = this.handleLike.bind(this);
        // this.handleUnlike = this.handleUnlike.bind(this);
    }

    componentDidMount() {
        this.props.getSongLikes(this.props.songId);
    }

    handleLike(){
        this.props.likeSong({
            liker: this.props.currentUser,
            parent_song: this.props.songId
        });
    }

    render() {

        let button = null;
        let likes = Object.values(this.props.likes);
        button = <input type="button" value="like" className="like-button" onClick={this.handleLike}/>;
        for (let i = 0; i < likes.length; i++) {
            const like = likes[i];
            if(like.liker === this.props.currentUser){
                button = <input type="button" value="unlike" className="unlike-button" onClick={() => this.props.unlikeSong(like._id)}/>;
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
        likes: state.entities.likes,
        songId: ownProps.match.params.songId
    }
};

const mDTP = dispatch => {
    return {
        getSongLikes: (songId) => dispatch(getSongLikes(songId)),
        likeSong: (like) => dispatch(likeSong(like)),
        unlikeSong: (likeId) => dispatch(unlikeSong(likeId))
    }
};

export default withRouter(connect(mSTP, mDTP)(LikeButton));
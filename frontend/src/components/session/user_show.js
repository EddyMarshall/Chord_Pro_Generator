import React from "react";
import { connect } from "react-redux"
import BioShowContainer from "../bio/bio_show_container";
import NavBar from "../nav/navbar";
import NavBarContainer from "../nav/navbar_container";
import SongFormContainer from "../song_form/song_form_container";
import { fetchUserSongs } from "../../actions/song_actions";
import { fetchUser } from "../../actions/user_actions";
import { getUserFollows, followUser, unfollowUser } from "../../actions/follow_actions";
import Repertoire from "../repertoire/repertoire";


class UserShow extends React.Component {

    constructor(props) {
        super(props);
        this.handleFollowUser = this.handleFollowUser.bind(this);
        this.handleUnfollowUser = this.handleUnfollowUser.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
        this.props.fetchUserSongs(this.props.userId);
        this.props.getUserFollows(this.props.userId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.userId !== this.props.userId) {
            this.props.fetchUserSongs(this.props.userId);
        };
    };

    handleFollowUser(){
        this.props.followUser({
            follower: this.props.currentUser.id,
            followed: this.props.userId
        });
    }

    handleUnfollowUser(){
        let followsArray = Object.values(this.props.follows);
        for (let i = 0; i < followsArray.length; i++) {
            const follow = followsArray[i];
            if (follow.follower === this.props.currentUser.id) {
                this.props.unfollowUser(follow._id);
                break;
                
            }
        }
    }

    render() {

        const form = (this.props.userId === (this.props.currentUser._id ||this.props.currentUser.id) ) ? (
            <SongFormContainer />
        ) : (
            ""
        )
        
        const repertoire = (Object.values(this.props.songs).length === 0) ? (
            ""
        ) : (
            <Repertoire songs={this.props.songs} userId={this.props.currentUser.id} />
        )

        let followButton = <button onClick={this.handleFollowUser} className={"follow-button"}>Follow user</button>;
        let followCount = Object.values(this.props.follows).length;
        let followsArray = Object.values(this.props.follows);
        for (let i = 0; i < followsArray.length; i++) {
            const follow = followsArray[i];
            if(follow.follower === this.props.currentUser.id){
                followButton = <button onClick={this.handleUnfollowUser} className={"follow-button"}>Unfollow user</button>;
            }
        }

        if (this.props.userId === this.props.currentUser.id) {
            followButton = null;
        }
        
        
        return (
            <div>
                {/* <p> THIS IS USERSHOW  </p> */}
                <div className="bio-and-repertoire">
                    <BioShowContainer {...this.props} />
                    {repertoire}
                </div>
                {form}
                <h1>{followButton}</h1>
                <div className="follows">
                    <h1>Followers: </h1>
                    <h1>{followCount}</h1>
                </div>
            </div>
        )
    }

};

const mSTP = (state, ownProps) => ({
    userId: ownProps.match.params.userId,
    songs: state.entities.songs,
    currentUser: state.session.user,
    follows: state.entities.follows
})

const mDTP = (dispatch) => ({
    fetchUserSongs: (userId) => dispatch(fetchUserSongs(userId)),
    getUserFollows: (userId) => dispatch(getUserFollows(userId)),
    followUser: (follow) => dispatch(followUser(follow)),
    unfollowUser: (followId) => dispatch(unfollowUser(followId)),
    fetchUser: (user) => dispatch(fetchUser(user))
})

export default connect(mSTP, mDTP)(UserShow);
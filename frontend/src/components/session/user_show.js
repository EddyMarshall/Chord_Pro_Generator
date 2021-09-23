import React from "react";
import {connect} from "react-redux"
import BioShowContainer from "../bio/bio_show_container";
import NavBar from "../nav/navbar";
import NavBarContainer from "../nav/navbar_container";
import SongFormContainer from "../song_form/song_form_container";
import { fetchUserSongs } from "../../actions/song_actions"


class UserShow extends React.Component {
    
    constructor(props){
        super(props);
    }

    componentDidMount() {
        console.log(this.props.userId);
        this.props.fetchUserSongs(this.props.userId);
    }

    render(){

        const form = (this.props.currentUser === this.props.userId) ? (
            <SongFormContainer />
        ) : (
            ""
        )

        return (
            <div>
                <p> THIS IS USERSHOW  </p>
                {/* <BioShowContainer /> */}
                {form}
            </div>
        )
    }

};

const mSTP = (state, ownProps) => ({
    userId: ownProps.match.params.userId,
    songs: state.entities.songs,
    currentUser: state.session.user.id
})

const mDTP = (dispatch) => ({
    fetchUserSongs: (userId) => dispatch(fetchUserSongs(userId))
})

export default connect(mSTP, mDTP)(UserShow);
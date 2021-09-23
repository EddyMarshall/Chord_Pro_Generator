import React from "react";
import {connect} from "react-redux"
import BioShowContainer from "../bio/bio_show_container";
import NavBar from "../nav/navbar";
import NavBarContainer from "../nav/navbar_container";
import SongFormContainer from "../song_form/song_form_container";


const UserShow = (props) => {
    return (
        <div>
            <p> THIS IS USERSHOW  </p>
            <NavBarContainer />
            {/* <BioShowContainer /> */}
            <SongFormContainer />
        </div>
    )
};

const mSTP = (state, ownProps) => ({
    userId: ownProps.match.params.userId
})

export default connect(mSTP, null)(UserShow);
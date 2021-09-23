import React from "react";
import NavBar from "../nav/navbar";
import NavBarContainer from "../nav/navbar_container";
import SongFormContainer from "../song_form/song_form_container";


const UserShow = (props) => {

    return (
        <div>
            <p> THIS IS USERSHOW  </p>
            <NavBarContainer />
            <SongFormContainer />
        </div>
    )
};

export default UserShow;
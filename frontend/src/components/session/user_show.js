import React from "react";
import BioShowContainer from "../bio/bio_show_container";
import NavBar from "../nav/navbar";
import NavBarContainer from "../nav/navbar_container";
import SongForm from "../song_form/song_form";


const UserShow = (props) => {
    return (
        <div>
            <p> THIS IS USERSHOW  </p>
            <NavBarContainer />
            <BioShowContainer />
            <SongForm />

        </div>
    )
};

export default UserShow;
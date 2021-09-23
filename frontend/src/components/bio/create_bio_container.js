import { fetchBio, createBio } from "../../actions/bio_actions";
import {connect} from "react-redux";
import BioForm from "./bio_form";

const mstp = (state) => {
    // IMPORTANT CHANGE THIS
    // let currentUserId = state.session.user.id;
    // let bio = null;
    // for (ele in state.entities.bio) {
    //     if (ele.user === currentUserId) {
    //         bio = ele;
    //     };
    // };
    // IMPORTANT CHANGE user: state.session.user.id AND HANDLE ON BACKEND
    return {
        currentUser: state.session.user.id,
        bio: {
            about: "",
            location: "",
            socialMedia: "",
            user: state.session.user.id
        },
        formType: "create bio"
    };
};


const mdtp = (dispatch, ownProps) => {
    return {
        action: (bio) => dispatch(createBio(bio)),
        resetContainer: ownProps.resetContainer
    };
};



export default connect(mstp, mdtp)(BioForm);
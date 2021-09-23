import { connect } from "react-redux";
import { fetchBio } from "../../actions/bio_actions";
import BioShow from "./bio_show";


const mstp = (state)  => {
    return ({
        bio: state.entities.bios[state.session.user.id],
        currentUser: state.session.user.id
    });
};


const mdtp = (dispatch) => ({
    fetchBio: (userId) => dispatch(fetchBio(userId))
});

export default connect(mstp, mdtp)(BioShow)


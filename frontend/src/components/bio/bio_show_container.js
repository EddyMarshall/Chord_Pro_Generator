import { connect } from "react-redux";
import { fetchBio } from "../../actions/bio_actions";
import BioShow from "./bio_show";


const mstp = (state, ownProps)  => {
    // debugger;
    return ({
        bio: state.entities.bios[ownProps.match.params.userId],
        currentUser: state.session.user.id,
        userId: ownProps.match.params.userId
    });
};


const mdtp = (dispatch) => ({
    fetchBio: (userId) => dispatch(fetchBio(userId))
});

export default connect(mstp, mdtp)(BioShow)


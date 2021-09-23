import React from "react";
import { updateBio, fetchBio } from "../../actions/bio_actions";
import BioForm from "./bio_form";
import { connect } from "react-redux";


class EditBioContainer extends React.Component {

    componentDidMount() {
        this.props.fetchBio(this.props.currentUser.id);
            // .then(() => this.setState({a: 1}));
    }

    render() {
        const {action, formType, bio} = this.props;
    
        if (!bio) return null;
        return (
            <BioForm
                action={action}
                formType={formType}
                bio={bio}
                // formType={this.props.formType}
                resetContainer={this.props.resetContainer}
            />
        );
    };
};

// IMPORTANT CHANGE bio: state.entitities.bio[state.session.user.id] TO USE OWNPARAMS
const mstp = (state) => {
    return ({
        bio: state.entities.bios[state.session.user.id],
        formType: "edit bio",
        currentUser: state.session.user,
    });
};

const mdtp = (dispatch, ownProps) => {
    return ({
        resetContainer: ownProps.resetContainer,
        action: (bio) => dispatch(updateBio(bio)),
        fetchBio: userId => dispatch(fetchBio(userId))
    });
};

export default connect(mstp, mdtp)(EditBioContainer);
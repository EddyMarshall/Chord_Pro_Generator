import React from "react";
import CreateBioContainer from "./create_bio_container";
import EditBioContainer from "./edit_bio_container";



class BioShow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {formType: null}
        this.handleClick = this.handleClick.bind(this);
        this.resetContainer = this.resetContainer.bind(this);
    };


    componentDidMount() {
        this.props.fetchBio(this.props.currentUser)
            .then((user) => {
                if (user && user.bio.data) {
                    this.setState({ formType: 0 });
                } else {
                    this.setState({ formType: 1 });
                };
            });
    };

    handleClick(e) {
        e.preventDefault();
        this.setState({ formType: 2 })
    };

    resetContainer() {
        this.setState({formType: 0})
    };
    

    render() {
        
        const {bio } = this.props;
        if (this.state.formType === null) return null;

        if (this.state.formType === 0 && bio) {
            return (
                <div className="bio-form-container">
                    {/* <p> Bio show form </p> */}
                    <div className="bio-form">
                        <div className="bio-about">
                            about: {bio.about}
                        </div>
                        <div className="bio-location">
                            location: {bio.location}
                        </div>
                        <div className="bio-socialMedia">
                            socialMedia: {bio.socialMedia}
                        </div>
                        <div className="bio-user">
                            user: {bio.user}
                        </div>
                        <button onClick={this.handleClick} className="edit-bio-button">Edit</button>
                    </div>
                </div>
            );
        }
        else if (this.state.formType === 1) {
            return(<CreateBioContainer resetContainer={this.resetContainer}/>);
        }

        else if (this.state.formType === 2) {
            return (<EditBioContainer  resetContainer={this.resetContainer}/>);
        }
        // return (<CreateBioContainer />);
        
    }
};

export default BioShow;
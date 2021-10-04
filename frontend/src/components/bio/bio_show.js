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
        this.props.fetchBio(this.props.userId)
            .then((bio) => {
                // debugger;
                if (bio && bio.bio.data) {
                    console.log("1");
                    this.setState({ formType: 0 });
                } else {
                    console.log("2");
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
    

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.userId !== prevProps.userId) {
            this.props.fetchBio(this.props.userId)
            .then((bio) => {
                if (bio && bio.bio.data) {
                    console.log("1");
                    this.setState({ formType: 0 });
                    this.setState({ ele: this.state.ele + 1 });
                } else {
                    console.log("2");
                    this.setState({ formType: 1 });
                    this.setState({ ele: this.state.ele + 1 });
                };
            });
        };
    };

    render() {
        const emptyBio = (
        <div className="bio-form-container">
            <div className="bio-form">
                
                <div className="bio-section-item">
                    <div className="bio-section-label">
                        About:
                    </div>

                    <p className="bio-section-content">
                        
                    </p>
                </div>
                
                <div className="bio-section-item">
                    <div className="bio-section-label">
                        location:
                    </div>

                    <p className="bio-section-content">
                        
                    </p>
                </div>
                
                <div className="bio-section-item">
                    <div className="bio-section-label">
                        social Media:
                    </div>

                    <p className="bio-section-content">
                        
                    </p>
                </div>
            </div>
            
            
        </div>)
        const {bio } = this.props;
        if (this.state.formType === null) return null;

        if (this.state.formType === 0 && bio) {
            return (
                <div className="bio-form-container">
                    <div className="bio-form">
                        <div className="bio-section-item">
                            <div className="bio-section-label">
                                About: 
                                <p className="bio-section-content">
                                    {bio.about}
                                </p>
                            </div>
                        </div>

                        <div className="bio-section-item">
                            <div className="bio-section-label">
                                Location:
                            </div>

                            <p className="bio-section-content">
                                {bio.location}
                            </p>
                        </div>


                        <div className="bio-section-item">
                            <div className="bio-section-label">
                                Social Media:
                            </div>

                            <p className="bio-section-content">
                                {bio.socialMedia}
                            </p>
                        </div>

                        {this.props.currentUser === this.props.userId ? 
                            <button onClick={this.handleClick} className="edit-bio-button">Edit</button> :
                            "" }
                    </div>
                </div>
            );
        }
        else if (this.state.formType === 1) {
            if (this.props.currentUser !== this.props.userId) {
                return emptyBio;
            }
            else {
                return(<CreateBioContainer resetContainer={this.resetContainer} {...this.props}/>);
            };
        }

        else if (this.state.formType === 2) {
            if (this.props.currentUser !== this.props.userId) {
                return emptyBio;
            }
            else {
                return (<EditBioContainer resetContainer={this.resetContainer} {...this.props} />);
            };
        }

        else {
            return (
                emptyBio
            );
        };
        // return (<CreateBioContainer />);
        
    }
};

export default BioShow;
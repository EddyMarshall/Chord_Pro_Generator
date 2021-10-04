import React from "react";

class BioForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = this.props.bio;
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
            .then(() => this.props.resetContainer());
    };


    render() {
        return (

            <form onSubmit={this.handleSubmit} className="bio-form-container">
                <label className="bio-input-label">About:
                    <textarea
                        className="bio-about-input"
                        type="text"
                        value={this.state.about}
                        onChange={this.update('about')}
                    />
                </label>

                <label className="bio-input-label">Location:
                    <input
                        className="bio-location-input"
                        type="text"
                        value={this.state.location}
                        onChange={this.update('location')}                        
                    />
                </label>

                <label className="bio-input-label">Social Media:
                    <textarea
                        className="bio-socialMedia-input"
                        type="text"
                        value={this.state.socialMedia}
                        onChange={this.update('socialMedia')}
                    />
                </label>

                <input type="submit" value="Save" className="edit-bio-button"/>
            </form>
        );
    };
};


export default BioForm;
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
        this.props.action(this.state);
        // debugger;
        // console.log("thunk action creator go here!")
    };


    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <label>About
                    <textarea
                        type="text"
                        value={this.state.about}
                        onChange={this.update('about')}
                    />

                </label>

                <br />
                <label>Location
                    <input
                        type="text"
                        value={this.state.location}
                        onChange={this.update('location')}
                    />
                </label>

                <br />

                <label>Social Media
                    <input
                        type="text"
                        value={this.state.socialMedia}
                        onChange={this.update('socialMedia')}
                    />
                </label>
                <input type="submit" value="edit bio" />
            </form>
        );
    };
};



export default BioForm;
import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) { // if authenticated, redirect to '/songs'
    // if (nextProps.currentUser === true) {
    //   this.props.history.push('/songs');
    // }
    this.setState({errors: nextProps.errors}) // Set or clear errors
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user)
      .then(this.props.history.push("/users/userId"));
  }

  // Render the session errors if there are any
  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {/* <img src="/images/background.JPG" className="background-img"/>  */}
        <form onSubmit={this.handleSubmit} className="whole-signup-login-form">
          <div className="signup-login-form">
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
                className="signup-input-field"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                className="signup-input-field"
              />
            <br/>
            <input 
              type="submit" 
              value="Log In!" 
              className="signup-login-button"
            />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
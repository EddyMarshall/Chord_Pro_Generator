// src/components/session/signup_form.js

import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      handle: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors})
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
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history); 
    this.props.history.push('/songs');
  }

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
      <div className="whole-signup-login-form">
        <form onSubmit={this.handleSubmit}>
          <div className="signup-login-form">
            <br/>
              <input 
                type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
                className="signup-input-field"
              />
            <br/>
              <input 
                type="text"
                value={this.state.handle}
                onChange={this.update('handle')}
                placeholder="Handle"
                className="signup-input-field"
              />
            <br/>
              <input 
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                className="signup-input-field"
              />
            <br/>
              <input 
                type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
                className="signup-input-field"
              />
            <br/>
            <input type="signup-button" value="Sign Up!" className="signup-login-button"/>
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
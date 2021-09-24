import React from 'react';
import { Link } from 'react-router-dom'
import DropdownContainer from '../nav_dropdown/dropdown_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  handleClick() {
    let user = {
      email: "demo@gmail.com",
      password: "123456"
    };
    this.props.login(user);
  };

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {

        return (
          <div className="navbar-centering-container">
              <div className="navbar-container">
                  <div className="nav-left">
                    <Link className="all-songs-link2" to={'/songs'}><h1 id="nav-bar-logo"></h1></Link>
                  </div>
                  <div className="right-nav">
                    <DropdownContainer/>
                  </div>
              </div>
          </div>
        );
      } else {
        return (
          <div className="login-title-bar">
            <div className="signup-login">
                <Link to={'/signup'} className="Signup">Signup</Link>
                <Link to={'/login'} className="Login">Login</Link>
                <button onClick={this.handleClick} className="demo">Demo User</button> 

            </div>
          </div>
        );
      }
  }

  render() {
      return (
        <div>
            { this.getLinks() }            
        </div>
      );
  }
}

export default NavBar;
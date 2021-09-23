import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

const mdtp = (dispatch) => {
  return ({
    login: user => dispatch(login(user))
  })
}

export default connect(
  mapStateToProps,
  mdtp
)(NavBar);

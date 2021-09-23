import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Dropdown from './dropdown'

const mSTP = state => ({
    currentUser: state.session.user.id
});


const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};


export default connect(mSTP, mDTP)(Dropdown);
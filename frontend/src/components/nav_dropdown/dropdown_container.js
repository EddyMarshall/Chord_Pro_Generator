import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Dropdown from './dropdown'

const mapStateToProps = state => ({
    currentUser: state.session.user.id
})


const mdtp = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};


export default connect(
    mapStateToProps,
    mdtp
)(Dropdown)
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Dropdown from './dropdown'

const mapStateToProps = state => ({
    currentUser: state.session.user.id
})


export default connect(
    mapStateToProps,
    { logout }  
)(Dropdown)
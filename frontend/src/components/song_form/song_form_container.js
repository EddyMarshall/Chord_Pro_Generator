import { connect } from 'react-redux';
import SongForm from './song_form'
import { composeSong } from '../../actions/song_actions'

const mSTP = state => {
    return {
        author_id: (state.session.user._id || state.session.user.id),
        errors: state.errors.songForm
    }
};

const mDTP = dispatch => ({
    composeSong: (song) => dispatch(composeSong(song))
});

export default connect(mSTP, mDTP)(SongForm)
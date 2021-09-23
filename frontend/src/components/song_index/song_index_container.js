import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions'
import SongIndex from './song_index'
import { fetchUsers } from '../../actions/user_actions'

const mSTP = state => {
    return {
        songs: Object.values(state.entities.songs),
        users: Object.values(state.entities.users)
    }
};

const mDTP = dispatch => ({
    fetchSongs: () => dispatch(fetchSongs()),
    fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mSTP, mDTP)(SongIndex)
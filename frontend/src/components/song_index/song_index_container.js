import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions'
import SongIndex from './song_index'

const mSTP = state => {
    return {
        songs: Object.values(state.entities.songs)
    }
};

const mDTP = dispatch => ({
    fetchSongs: () => dispatch(fetchSongs())
});

export default connect(mSTP, mDTP)(SongIndex)
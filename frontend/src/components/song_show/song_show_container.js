import { fetchSong } from "../../actions/song_actions";
import { connect } from 'react-redux';
import SongShow from './song_show'

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.session.user.id,
        song: state.entities.songs[ownProps.match.params.songId],
        songId: ownProps.match.params.songId
    }
};

const mDTP = dispatch => {
    return {
        fetchSong: (song) => dispatch(fetchSong(song))
    }
};

export default connect(mSTP, mDTP)(SongShow);
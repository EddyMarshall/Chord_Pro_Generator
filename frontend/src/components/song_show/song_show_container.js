import { fetchSong, updateSong } from "../../actions/song_actions";
import { getSongLikes} from "../../actions/like_actions";
import { connect } from 'react-redux';
import SongShow from './song_show'
import { fetchUser } from "../../actions/user_actions";

const mSTP = (state, ownProps) => {   

    return {
        currentUser: state.session.user.id,
        song: state.entities.songs[ownProps.match.params.songId],
        songId: ownProps.match.params.songId,
        users: state.entities.users,
        likes: state.entities.likes
    }
};

const mDTP = dispatch => {
    return {
        fetchSong: (song) => dispatch(fetchSong(song)),
        getSongLikes: (songId) => dispatch(getSongLikes(songId)),
        fetchUser: (user) => dispatch(fetchUser(user)),
        editSong: (song) => dispatch(updateSong(song))
    }
};

export default connect(mSTP, mDTP)(SongShow);
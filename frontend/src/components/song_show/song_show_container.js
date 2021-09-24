import { fetchSong } from "../../actions/song_actions";
import { getSongLikes} from "../../actions/like_actions";
import { connect } from 'react-redux';
import SongShow from './song_show'
import { fetchUser } from "../../actions/user_actions";

const mSTP = (state, ownProps) => {

    const composer = (Object.values(state.entities.users).length != 0 ) ? (
        Object.values(state.entities.users)[0].handle
    ) : (
        ""
    )
    

    return {
        currentUser: state.session.user.id,
        song: state.entities.songs[ownProps.match.params.songId],
        songId: ownProps.match.params.songId,
        composer: composer
    }
};

const mDTP = dispatch => {
    return {
        fetchSong: (song) => dispatch(fetchSong(song)),
        getSongLikes: (songId) => dispatch(getSongLikes(songId)),
        fetchUser: (user) => dispatch(fetchUser(user))
    }
};

export default connect(mSTP, mDTP)(SongShow);
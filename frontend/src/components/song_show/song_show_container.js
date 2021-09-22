import { fetchSong } from "../../actions/song_actions";
import { connect } from 'react-redux';
import SongShow from './song_show'

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        currentUser: state.session.user.id,
        song: state.entities.songs[ownProps.match.params.songId]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSong: (song) => dispatch(fetchSong(song))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongShow)
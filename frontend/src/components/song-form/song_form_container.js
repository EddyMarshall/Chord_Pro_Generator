import { connect } from 'react-redux';
import SongForm from './song_form'
import { composeSong } from '../../actions/song_actions'

const mapStateToProps = state => {
    return {
        //DOUBLE CHECK THAT THIS IS WHAT OUR STATE LOOKS LIKE
        author_id: state.session.currentUser
    }
}

const mapDispatchToProps = dispatch => ({
    composeSong: (song) => dispatch(composeSong(song))
})

export default connect(mapStateToProps, mapDispatchToProps)(SongForm)
import { connect } from 'react-redux';
import SongForm from './song_form'
import { composeSong } from '../../actions/song_actions'

const mapStateToProps = state => {
    return {
        author_id: state.session.user.id
    }
}

const mapDispatchToProps = dispatch => ({
    composeSong: (song) => dispatch(composeSong(song))
})

export default connect(mapStateToProps, mapDispatchToProps)(SongForm)
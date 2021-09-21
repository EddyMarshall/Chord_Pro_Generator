import { RECEIVE_SONGS, RECEIVE_USER_SONGS, RECEIVE_SONG, REMOVE_SONG } from '../actions/song_actions';

const SongsReducer = (oldState = [], action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_SONGS:
            return action.songs.data;
        case RECEIVE_USER_SONGS:
            nextState.user = action.songs.data;
            return nextState;
        case RECEIVE_SONG:
            nextState.push = action.song.data
            return nextState;
        case REMOVE_SONG:
            let deleted = nextState.filter(song => song._id != action.songId)
            return deleted;
        default:
            return oldState;
    }
};

export default SongsReducer;
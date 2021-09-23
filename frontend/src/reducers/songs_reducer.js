import { RECEIVE_SONGS, RECEIVE_USER_SONGS, RECEIVE_SONG, REMOVE_SONG } from '../actions/song_actions';

const SongsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_SONGS:
            return action.songs.data;
        case RECEIVE_USER_SONGS:
            nextState = action.songs.data;
            return nextState;
        case RECEIVE_SONG:
            nextState[action.song.data._id] = action.song.data;
            return nextState;
        case REMOVE_SONG:
            delete nextState[action.song.data._id];
            return nextState;
        default:
            return oldState;
    }
};

export default SongsReducer;
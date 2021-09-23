import { combineReducers } from 'redux';
import SongsReducer from './songs_reducer';
// import FollowsReducer from './follows_reducer';
import BiosReducer from './bios_reducer';

const entitiesReducer = combineReducers({
    songs: SongsReducer,
    // follows: FollowsReducer
    bios: BiosReducer
});

export default entitiesReducer;
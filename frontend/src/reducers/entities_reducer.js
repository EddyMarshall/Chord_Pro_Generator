import { combineReducers } from 'redux';
import SongsReducer from './songs_reducer';
// import FollowsReducer from './follows_reducer';

const entitiesReducer = combineReducers({
    songs: SongsReducer
    // follows: FollowsReducer
})

export default entitiesReducer
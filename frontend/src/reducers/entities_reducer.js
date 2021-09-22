import { combineReducers } from 'redux';
import SongsReducer from './songs_reducer';

const entitiesReducer = combineReducers({
    songs: SongsReducer
})

export default entitiesReducer
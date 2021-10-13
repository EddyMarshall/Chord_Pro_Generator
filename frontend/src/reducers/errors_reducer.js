import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import SongFormErrorsReducer from './song_form_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  songForm: SongFormErrorsReducer
});
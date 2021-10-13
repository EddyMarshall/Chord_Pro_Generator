import { RECEIVE_SONG_ERRORS, RECEIVE_SONG } from '../actions/song_actions';

const _nullErrors = [];

const SessionErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type) {
   case RECEIVE_SONG_ERRORS:
      return action.errors;  
   default:
      return state;
  }
};

export default SessionErrorsReducer;
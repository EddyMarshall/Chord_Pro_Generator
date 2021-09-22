import { combineReducers } from 'redux';
import SongsReducer from './songs_reducer';
import FollowsReducer from './follows_reducer';
import LikesReducer from './likes_reducer';
import PeerReviewsReducer from './peer_reviews_reducer';

const entitiesReducer = combineReducers({
    songs: SongsReducer,
    follows: FollowsReducer,
    likes: LikesReducer,
    peerReviews: PeerReviewsReducer
})

export default entitiesReducer
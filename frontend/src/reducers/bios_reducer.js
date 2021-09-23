import { RECEIVE_BIO } from "../actions/bio_actions";

const BiosReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_BIO:
            if (!action.bio.data) {
                return oldState;
            };
            newState[action.bio.data.user] = action.bio.data;
            return newState;
        default:
            return oldState
    };
};

export default BiosReducer;
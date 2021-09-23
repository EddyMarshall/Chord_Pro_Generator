import * as bioApiUtil from "../util/bio_api_util";

export const RECEIVE_BIO = "RECEIVE_BIO";

const receiveBio = bio => {
    return {
        type: RECEIVE_BIO,
        bio
    };
};

export const fetchBio = (userId) => dispatch => {
    return (
        bioApiUtil.getBio(userId)
            .then((bio) => dispatch(receiveBio(bio)))
            .catch((err) => console.log(`error in fetchbio: ${err}`))
    );
};

export const createBio = (bio) => (dispatch) => {
    return (
        bioApiUtil.createBio(bio)
            .then((bio) => dispatch(receiveBio(bio)))
            .catch((err) => console.log(`error in createBio: ${err}`))
    );
};

export const updateBio = (bio) => (dispatch) => {
    return (
        bioApiUtil.updateBio(bio)
            .then((bio) => dispatch(receiveBio(bio)))
            .catch((err) => console.log(`error in Editbio: ${err}`))
    );
};







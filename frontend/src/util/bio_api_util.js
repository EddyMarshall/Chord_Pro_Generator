import axios from 'axios';


// router.get('/:bioId'
export const getBio = (bioId) => {
    return axios.get(
        `/api/bios/${bioId}`
    );
};

// router.put('/:bioId'
export const updateBio = (bio) => {
    return axios.put(
        `/api/bios/${bio._id}`,
        bio
    );
};

// router.post('/',
export const createBio = (bio) => {
    return axios.post(
        `/api/bios`,
        bio
    );
};
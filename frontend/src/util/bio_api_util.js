import axios from 'axios';


// router.get('/:bioId'
export const getBio = (userId) => {
    return axios.get(
        `/api/bios/${userId}`
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
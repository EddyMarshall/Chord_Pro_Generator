import axios from 'axios';

export const getFollows = () => {
    return axios.get(
        '/api/follows')
};

export const getUserFollows = (userId) => {
    return axios.get(
        `/api/follows/user/${userId}`)
};


export const followUser = data => {
    return axios.post(
        '/api/follows',
        data
    )
};

export const unfollowUser = followId => {
    return axios.delete(
        `/api/follows/${followId}`
    )
};
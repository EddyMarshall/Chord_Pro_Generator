import axios from 'axios';

export const getFollows = () => {
    return axios.get(
        '/api/follows')
};

export const followUser = data => {
    return axios.post(
        '/api/follows',
        data
    )
};

export const unfollowUser = followId => {
    return axios.destroy(
        `/api/follows/${followId}`
    )
};
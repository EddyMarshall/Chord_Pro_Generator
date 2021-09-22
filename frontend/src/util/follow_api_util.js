import axios from 'axios';

export const followUser = data => {
    return axios.post(
        '/api/likes',
        data
    )
}

export const unfollowUser = followId => {
    return axios.destroy(
        `/api/songs/${followId}`
    )
}
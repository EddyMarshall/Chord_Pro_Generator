import axios from 'axios';

export const getLikes = () => {
    return axios.get(
        '/api/likes')
};

export const likeSong = data => {
    return axios.post(
        '/api/likes',
        data
    )
};

export const unlikeSong = likeId => {
    return axios.destroy(
        `/api/like/${likeId}`
    )
};
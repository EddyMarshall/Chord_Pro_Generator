import axios from 'axios';

export const likeSong = data => {
    return axios.post(
        '/api/likes',
        data
    )
}

export const unlikeSong = likeId => {
    return axios.destroy(
        `/api/songs/${likeId}`
    )
}
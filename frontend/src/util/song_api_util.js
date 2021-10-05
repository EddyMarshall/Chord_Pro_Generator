import axios from 'axios';

export const getSongs = () => {
    return axios.get(
        '/api/songs')
};

export const getSong = (songId) => {
    return axios.get(
        `/api/songs/${songId}`
    )
};

export const getUserSongs = id => {
    return axios.get(
        `/api/songs/user/${id}`)
};

export const writeSong = data => {
    return axios.post(
        '/api/songs', 
        data
        )
};

export const updateSong = song => {
    return axios.patch(
        `/api/songs/${song.id}`,
        song
    )
};

export const deleteSong = songId => {
    return axios.delete(
        `/api/songs/${songId}`,
        
    )
};
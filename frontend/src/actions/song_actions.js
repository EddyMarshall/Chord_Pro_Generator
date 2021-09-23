import * as song_api_util from '../util/song_api_util';

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_USER_SONGS = "RECEIVE_USER_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const REMOVE_SONG = "REMOVE_SONG"

export const receiveSongs = songs => ({
    type: RECEIVE_SONGS,
    songs
});

export const receiveUserSongs = songs => ({
    type: RECEIVE_USER_SONGS,
    songs
});

export const receiveSong = song => ({
    type: RECEIVE_SONG,
    song
})

export const removeSong = songId => ({
    type: REMOVE_SONG,
    songId
})

export const fetchSongs = () => dispatch => (
    song_api_util.getSongs()
        .then(songs => dispatch(receiveSongs(songs)))
        .catch(err => console.log(err))
);

export const fetchSong = (song) => dispatch => {
    return song_api_util.getSong(song)
        .then(song => dispatch(receiveSong(song)))
}

export const fetchUserSongs = id => dispatch => (
    song_api_util.getUserSongs(id)
        .then(songs => dispatch(receiveUserSongs(songs)))
        .catch(err => console.log(err))
);

export const composeSong = song => dispatch => (
    song_api_util.writeSong(song)
        .then(song => dispatch(receiveSong(song)))
        .catch(err => console.log(err))
);

export const updateSong = song => dispatch => (
    song_api_util.updateSong(song)
        .then((song) => dispatch(receiveSong(song)))
);

export const deleteSong = songId => dispatch => (
    song_api_util.deleteSong(songId)
        .then(() => dispatch(removeSong(songId)))
);
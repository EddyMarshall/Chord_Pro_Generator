import React from "react";
import { Link } from 'react-router-dom';


//iterates over the users to find which id matches the songwriter id of the current song
function songwriterNamePullerOuter(props) {
    let songwriterName = ""
    let i = 0;
    while (i < props.users.length) {
        if (props.users[i]._id === props.song.songwriter) {
            songwriterName = props.users[i].handle
            i += props.users.length
        } else {
            i += 1
        }
    }

    return songwriterName
}


//component to create each LI in the song Index
const SongIndexItem = props => {
    let songwriterName
    let songwriterElement
    if (props.users.length != 0) {
        songwriterName = songwriterNamePullerOuter(props)
        if (songwriterName === "") {
            songwriterElement = "Anonymous Artist"
        } else {
            songwriterElement = songwriterName
        }
    }
    

    return (
        <li className="song-index-item">
            <Link className="song-index-song-link" to={`/songs/${props.song._id}`}>
                <div className="song-index-title">
                    {props.song.title}
                </div>
            </Link>

            <div className="song-index-song-key-link">
                <div className="song-index-key">
                    {`key: ${props.song.key} Major`}
                </div>
            </div>

            <Link className="song-index-user-link" to={`/users/${props.song.songwriter}`}>
                {songwriterElement}
            </Link>
        </li>
    )
};

export default SongIndexItem;

import React from "react";
import { Link } from 'react-router-dom';

const SongIndexItem = props => {


    //this needs to be update to show the songwriter name and not the songwriter ID
    return (
        <li className="song-index-item">
            <Link className="song-index-song-link" to={`/songs/${props.song._id}`}>
                <div className="song-index-title">
                    {props.song.title}
                </div>
            </Link>

            <Link className="song-index-song-key-link" to={`/songs/${props.song._id}`}>
                <div className="song-index-key">
                    {`key: ${props.song.key} Major`}
                </div>
            </Link>

            <Link className="song-index-user-link" to={`/users/${props.song.songwriter}`}>
                {props.song.songwriter}
            </Link>
        </li>
    )
}

export default SongIndexItem
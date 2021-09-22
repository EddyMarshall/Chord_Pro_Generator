import React from 'react'
import { Link } from 'react-router-dom';
import SongIndexItem from './song_index_item'


class SongIndex extends React.Component {

    componentDidMount(){
        this.props.fetchSongs();
    }

    render(){
        const songs = this.props.songs
        return(
            <div className="song-index-container">
                <ul className="song-index-proper">
                {
                songs.map((song, i) => (<SongIndexItem key={i} song={song}/>))
                }
                </ul>
            </div>
        )
    }
}

export default SongIndex
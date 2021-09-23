import React from 'react'
import { Link } from 'react-router-dom';
import SongIndexItem from './song_index_item'


class SongIndex extends React.Component {

    componentDidMount(){
        this.props.fetchSongs();
        console.log("HELLO")
        this.props.fetchUsers();
    }

    render(){
        const songs = this.props.songs
        const users = this.props.users
        return(
            <div className="song-index-container">
                <ul className="song-index-proper">
                {
                    songs.map((song, i) => (
                    <SongIndexItem 
                        key={i} 
                        song={song} 
                        users={users}/>
                        )
                    )
                }
                </ul>
            </div>
        )
    }
};

export default SongIndex;
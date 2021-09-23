import React from 'react'
import { Link } from 'react-router-dom';
import RepertoireItem from './repertoire_item'

const Repertoire = props => {
    const songsArray = Object.values(props.songs)
    return (
        <div className="repertoire-container">
            <ul className="repertoire-list-proper">
                {
                songsArray.map(song => (<RepertoireItem song={song}/>))
                }
            </ul>
        </div>
    )

}

export default Repertoire
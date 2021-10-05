import React from 'react'
import { Link } from 'react-router-dom';
import RepertoireItem from './repertoire_item'

const Repertoire = props => {
    const songsArray = Object.values(props.songs)
    return (
        <div className="repertoire-container">
            <div className="title-container">
                <h1 className="repertoire-title">Repertoire</h1>
            </div>
            <ul className="repertoire-list-proper">
                {
                songsArray.map((song, i) => (<RepertoireItem key={i} song={song} user={props.userId}/>))
                }
            </ul>
        </div>
    )

}

export default Repertoire
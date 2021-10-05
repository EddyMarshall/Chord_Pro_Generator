import React from "react";
import { Link } from 'react-router-dom';

export const RepertoireItem = props => {

<<<<<<< Updated upstream
    return (
       <li className="repertoire-item">
            <Link to={`/songs/${props.song._id}`} className="repertoire-title">
                {props.song.title}
           </Link>
           <div className="repertoire-key">
                {`${props.song.key} Major`}
           </div>  
       </li>
=======
    constructor(props) {
        super(props)
        this.deleteSong = this.handleDelete.bind(this)
    }

    handleDelete(id) {
        this.props.deleteSong(id)
    }

    render(){
        const deleteButton = this.props.user === this.props.song.songwriter ? (
            <button onClick={() => this.handleDelete(this.props.song._id)} className="song-delete-button">
                Delete
            </button>
        ) : (
            ""
        )

        debugger

        return (
            <li className="repertoire-item">
            <Link to={`/songs/${this.props.song._id}`} className="repertoire-title">
                {this.props.song.title}
            </Link>
            <div className="repertoire-key">
                {`${this.props.song.key} Major`}
            </div>
            {deleteButton}
        </li>
>>>>>>> Stashed changes
    )
};

export default RepertoireItem;
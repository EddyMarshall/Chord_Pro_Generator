import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteSong } from '../../actions/song_actions';

class RepertoireItem extends React.Component {

    constructor(props) {
        super(props)
        this.deleteSong = this.handleDelete.bind(this)
    }

    handleDelete(id) {
        this.props.deleteSong(id)
    }

    render() {

        const deleteButton = this.props.user === this.props.song.songwriter ? (
            <button onClick={() => this.handleDelete(this.props.song._id)} className="song-delete-button">
                Delete
            </button>
        ) : (
            ""
        )

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
        )
    }
};

const mapdispatchToProps = dispatch => ({
    deleteSong: (id) => dispatch(deleteSong(id))
})

export default connect(null, mapdispatchToProps)(RepertoireItem)
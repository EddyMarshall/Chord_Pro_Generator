import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteSong, updateSong } from '../../actions/song_actions';

class RepertoireItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            edit: false,
            title: this.props.song.title
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.update = this.update.bind(this);
    }
    handleEdit(song) {
        song.title = this.state.title;
        this.props.updateSong(song)
        this.setState({edit: false})
    }

    handleDelete(id) {
        this.props.deleteSong(id)
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        };
    };

    render() {
        const editButton = this.props.user === this.props.song.songwriter ? (
            <button onClick={() => this.setState({edit: true})} className="song-delete-button">
                Edit
            </button>
        ) : (
            ""
        )

        const saveButton = this.props.user === this.props.song.songwriter ? (
            <button onClick={() => this.handleEdit(this.props.song)} className="song-delete-button">
                Save
            </button>
        ) : (
            ""
        )

        const deleteButton = this.props.user === this.props.song.songwriter ? (
            <button onClick={() => this.handleDelete(this.props.song._id)} className="song-delete-button">
                Delete
            </button>
        ) : (
            ""
        )

        return ( this.props.song ?
            <li className="repertoire-item">
                {this.state.edit ? 
                    <input type="text" 
                        className="song-edit-form2"
                        value={this.state.title}
                        onChange={this.update('title')}
                    /> :
                    <Link to={`/songs/${this.props.song._id}`} className="repertoire-title">
                        {this.props.song.title}
                    </Link> 
                }
                <div className="repertoire-key">
                    {`${this.props.song.key}`}
                </div>
                <div className="edit-delete-button-container">
                    {this.state.edit ? saveButton : editButton}
                    {deleteButton}
                </div>
            </li> : null
        )
    }
};

const mapdispatchToProps = dispatch => ({
    deleteSong: (id) => dispatch(deleteSong(id)),
    updateSong: (song) => dispatch(updateSong(song))
})

export default connect(null, mapdispatchToProps)(RepertoireItem)
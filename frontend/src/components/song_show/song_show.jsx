import React from 'react';
import PeerReviewFormContainer from "../peer_review_form/peer_review_form_container";
import LikeButtonContainer from "../like_button/like_button";
import SongPlayContainer from "../song_play/song_play";
import { Link } from 'react-router-dom';


class SongShow extends React.Component {
    constructor(props){
        super(props);
        // if (this.props.song) {
        //     this.setState({name: this.props.song.name})
        // };
        // this.state = this.props.song;
        // this.setState ({edit: 0});
        this.state = { 
            edit: 0, 
            title: "" 
        };
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentDidMount(){
        this.props.fetchSong(this.props.songId)
            .then((song) => this.props.fetchUser(song.song.data.songwriter))
        this.props.getSongLikes(this.props.songId);
    };

    componentDidUpdate(prevProps) {
        if ( prevProps.song !== this.props.song) {
            this.setState({title: this.props.song.title});
        };
    };

    handleEdit(e) {
        this.setState({ edit: 1 });
    };

    handleSubmit(e) {
        e.preventDefault();
        this.setState({edit: 0});
        let song = this.props.song;
        song.title = this.state.title;
        this.props.editSong(song);
    };

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        };
    };


    render(){
        let likesCount = Object.values(this.props.likes).length;
        let songExists = !!(this.props.song);
        let songChords = null; 
        let peerReviewForm = null;
        let likeButton = null;
        let songPlayButton = null;
        let editButton;
        let name;
        if (songExists) {
            // this.setState({name: this.props.song.name});


            if (this.state.edit === 0 && this.props.currentUser === this.props.song.songwriter) {
                editButton = <button className="song-edit-button" onClick={() => this.handleEdit()}>Edit</button>
            } else {
                editButton = "";
            };


            if (this.state.edit === 0) {
                name = <h1 className="song-title">{this.props.song.title}</h1>
            } else {
                name = (
                    <form className="song-edit-form-container">
                        <button className="song-edit-button" 
                        onClick={this.handleSubmit}>Save</button>
                        <input type="text" 
                            className="song-edit-form"
                            placeholder={this.props.song.title}
                            value={this.state.title}
                            onChange={this.update('title')}
                        />
                    </form>
                )
            }
        }


        if(songExists){
            songChords = <div>
                <div className="sheet">

                    <div className="song-author-container">
                        {editButton}
                        {name}
                        <Link to={`/users/${this.props.song.songwriter}`}>
                            <div className="song-author">
                                {this.props.users[this.props.song.songwriter] ? this.props.users[this.props.song.songwriter].handle : null}
                            </div>
                        </Link>
                    </div>
                    <div className="whole-song">
                        {this.props.song.chordProgression.map((chord, i) => {
                            return (
                                <div key={`chord ${i}`}>                                
                                    <h1 className={`chord`}>{chord}</h1> 
                                    <h1 className={`bar`}></h1>
                                    <div><h1 className="bars4"></h1></div>
                                </div>
                            )
                        })}
                    </div>
                </div>         
            </div>
            peerReviewForm = <PeerReviewFormContainer songId={this.props.song._id} />;
            likeButton = <LikeButtonContainer songId={this.props.song._id} getSongLikes={this.props.getSongLikes} />;
            songPlayButton = <SongPlayContainer songId={this.props.song._id} song={this.props.song}/>

        }
        return(
            <div>
                {songChords}
                <div className="song-foot">
                    {songPlayButton}
                    <div className="likes">
                        <h1>Likes: {likesCount}</h1>
                        <h1>{likeButton}</h1>
                    </div>
                </div>
                {peerReviewForm}
            </div>            
        )
    }
};

export default SongShow;



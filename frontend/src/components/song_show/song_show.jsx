import React from 'react'


class SongShow extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchSong(this.props.songId);
    }

    render(){
        let songExists = !!(this.props.song);
        let songChords = null;
        if(songExists){
            songChords = <div>
                <ul>
                    {this.props.song.chordProgression.map((chord) => {
                        return (<li>{chord}</li>)
                    })}
                </ul>
                
            </div>
        }
        return(
            <div>
                <div>Song exists: {String(songExists)}</div>
                {songChords}
            </div>
            
        )
    }
}

export default SongShow
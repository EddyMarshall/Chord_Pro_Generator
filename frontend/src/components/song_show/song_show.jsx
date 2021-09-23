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
                <ul className="sheet">
                    <h1 className="song-title">{this.props.song.title}</h1>
                    <h1 className="song-author">{this.props.song.songwriter}</h1>
                    <div className="whole-song">
                        {this.props.song.chordProgression.map((chord, i) => {
                            return (
                                <div>                                
                                    <li className={`chord`}>{chord}</li> 
                                    <li className={`bar`}></li>
                                    <div><h1 className="bars4"></h1></div>
                                </div>
                            )
                        })}
                    </div>
                </ul>
                
            </div>
        }
        return(
            <div>
                {/* <div>Song exists: {String(songExists)}</div> */}
                {songChords}
            </div>
            
        )
    }
}

export default SongShow
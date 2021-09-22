import React from 'react'


class SongShow extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        if (this.props.song){
            this.props.fetchSong(this.props.song)
        }
    }

    render(){
        debugger
        return(
            <div>SONG SHOW PAGE LEGGGOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</div>
        )
    }
}

export default SongShow
import React from 'react';
import { connect } from 'react-redux';
import C from '../../audio/triads/CMajor.mp3';
import Db from '../../audio/triads/DbMajor.mp3';
import D from '../../audio/triads/DMajor.mp3';
import Eb from '../../audio/triads/EbMajor.mp3';
import E from '../../audio/triads/EMajor.mp3';
import F from '../../audio/triads/FMajor.mp3';
import Gb from '../../audio/triads/GbMajor.mp3';
import G from '../../audio/triads/GMajor.mp3';
import Ab from '../../audio/triads/AbMajor.mp3';
import A from '../../audio/triads/AMajor.mp3';
import Bb from '../../audio/triads/BbMajor.mp3';
import B from '../../audio/triads/BMajor.mp3';
import Cmin from '../../audio/triads/CMinor.mp3';
import Dbmin from '../../audio/triads/DbMinor.mp3';
import Dmin from '../../audio/triads/DMinor.mp3';
import Ebmin from '../../audio/triads/EbMinor.mp3';
import Emin from '../../audio/triads/EMinor.mp3';
import Fmin from '../../audio/triads/FMinor.mp3';
import Gbmin from '../../audio/triads/GbMinor.mp3';
import Gmin from '../../audio/triads/GMinor.mp3';
import Abmin from '../../audio/triads/AbMinor.mp3';
import Amin from '../../audio/triads/AMinor.mp3';
import Bbmin from '../../audio/triads/BbMinor.mp3';
import Bmin from '../../audio/triads/BMinor.mp3';
import Cdim from '../../audio/triads/CDiminished.mp3';
import Dbdim from '../../audio/triads/DbDiminished.mp3';
import Ddim from '../../audio/triads/DDiminished.mp3';
import Ebdim from '../../audio/triads/EbDiminished.mp3';
import Edim from '../../audio/triads/EDiminished.mp3';
import Fdim from '../../audio/triads/FDiminished.mp3';
import Gbdim from '../../audio/triads/GbDiminished.mp3';
import Gdim from '../../audio/triads/GDiminished.mp3';
import Abdim from '../../audio/triads/AbDiminished.mp3';
import Adim from '../../audio/triads/ADiminished.mp3';
import Bbdim from '../../audio/triads/BbDiminished.mp3';
import Bdim from '../../audio/triads/BDiminished.mp3';
import { set } from 'mongoose';

class SongPlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songPlaying: false,
            currChordIdx: 0
        };
        this.playButtonClicked = this.playButtonClicked.bind(this);
        this.restartButtonClicked = this.restartButtonClicked.bind(this);
        this.playChord = this.playChord.bind(this);
        this.restartProgression = this.restartProgression.bind(this);
        this.chordHash = {
            A: A,
            A7: A,
            Amaj7: A,
            Amin: Amin,
            Amin7: Amin,
            Adim: Adim,
            Amin7b5: Adim,
            'A#': Bb,
            'A#7': Bb,
            'A#maj7': Bb,
            'A#min': Bbmin,
            'A#min7': Bbmin,
            'A#dim': Bbdim,
            'A#min7b5': Bbdim,
            Bb: Bb,
            Bb7: Bb,
            Bbmaj7: Bb,
            Bbmin: Bbmin,
            Bbmin7: Bbmin,
            Bbdim: Bbdim,
            Bbmin7b5: Bbdim,
            B: B,
            B7: B,
            Bmaj7: B,
            Bmin: Bmin,
            Bmin7: Bmin,
            Bdim: Bdim,
            Bmin7b5: Bdim,
            C: C,
            C7: C,
            Cmaj7: C,
            Cmin: Cmin,
            Cmin7: Cmin,
            Cdim: Cdim,
            Cmin7b5: Cdim,
            'C#': Db,
            'C#7': Db,
            'C#maj7': Db,
            'C#min': Dbmin,
            'C#min7': Dbmin,
            'C#dim': Dbdim,
            'C#min7b5': Dbdim,
            Db: Db,
            Db7: Db,
            Dbmaj7: Db,
            Dbmin: Dbmin,
            Dbmin7: Dbmin,
            Dbdim: Dbdim,
            Dbmin7b5: Dbdim,
            D: D,
            D7: D,
            Dmaj7: D,
            Dmin: Dmin,
            Dmin7: Dmin,
            Ddim: Ddim,
            Dmin7b5: Ddim,
            'D#': Eb,
            'D#7': Eb,
            'D#maj7': Eb,
            'D#min': Ebmin,
            'D#min7': Ebmin,
            'D#dim': Ebdim,
            'D#min7b5': Ebdim,
            Eb: Eb,
            Eb7: Eb,
            Ebmaj7: Eb,
            Ebmin: Ebmin,
            Ebmin7: Ebmin,
            Ebdim: Ebdim,
            Ebmin7b5: Ebdim,
            E: E,
            E7: E,
            Emaj7: E,
            Emin: Emin,
            Emin7: Emin,
            Edim: Edim,
            Emin7b5: Edim,
            F: F,
            F7: F,
            Fmaj7: F,
            Fmin: Fmin,
            Fmin7: Fmin,
            Fdim: Fdim,
            Fmin7b5: Fdim,
            'F#': Gb,
            'F#7': Gb,
            'F#maj7': Gb,
            'F#min': Gbmin,
            'F#min7': Gbmin,
            'F#dim': Gbdim,
            'F#min7b5': Gbdim,
            Gb: Gb,
            Gb7: Gb,
            Gbmaj7: Gb,
            Gbmin: Gbmin,
            Gbmin7: Gbmin,
            Gbdim: Gbdim,
            Gbmin7b5: Gbdim,
            G: G,
            G7: G,
            Gmaj7: G,
            Gmin: Gmin,
            Gmin7: Gmin,
            Gdim: Gdim,
            Gmin7b5: Gdim,
            'G#': Ab,
            'G#7': Ab,
            'G#maj7': Ab,
            'G#min': Abmin,
            'G#min7': Abmin,
            'G#dim': Abdim,
            'G#min7b5': Abdim,
            Ab: Ab,
            Ab7: Ab,
            Abmaj7: Ab,
            Abmin: Abmin,
            Abmin7: Abmin,
            Abdim: Abdim,
            Abmin7b5: Abdim
        };
        this.interval = null;
    };

    playButtonClicked() {
        if(this.state.songPlaying){
            this.setState({songPlaying: false});
            clearInterval(this.interval);
        } else {
            this.setState({ songPlaying: true });
            this.setState({currChordIdx: 0});
            this.playChord(this.state.currChordIdx);
            this.interval = setInterval(this.playChord, 1700);
        }
    }

    restartButtonClicked() {
        clearInterval(this.interval);
        this.setState({ currChordIdx: 0, songPlaying: true });
        this.restartProgression();
        this.interval = setInterval(this.playChord, 1700);
    }

    restartProgression(){
        let str = this.props.song.chordProgression[0];
        let audio = new Audio(this.chordHash[str]);
        audio.play();
        this.setState({ currChordIdx: 1 });
    }

    playChord() {
        let str = this.props.song.chordProgression[this.state.currChordIdx];
        let audio = new Audio(this.chordHash[str]);
        audio.play();
        if(this.state.currChordIdx===this.props.song.chordProgression.length-1){
            this.setState({ currChordIdx: 0, songPlaying: false });
            clearInterval(this.interval);
        }else{
            this.setState({ currChordIdx: this.state.currChordIdx + 1 });
        }
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render() {

        return (
            <div>
                <button onClick={this.playButtonClicked}>PLAY/PAUSE</button>
                <button onClick={this.restartButtonClicked}>RESTART</button>
            </div>
        )
    }
};

const mSTP = (state, ownProps) => {
    return {

    }
};

const mDTP = dispatch => {
    return {

    }
};

export default connect(mSTP, mDTP)(SongPlay);
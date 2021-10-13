import React from 'react'

class SongForm extends React.Component {
    static initialState = {
        songTitle: "",
        key: "C",
        barCount: 8,
        triadsChecked: true,
        extendedChordsChecked: false,
        secondaryDominantsChecked: false,
        resolve: true,
        errors: {},
    }

    constructor(props) {
        super(props)
        this.chordMasterList = []        
        this.state = SongForm.initialState
        this.handleSubmit = this.handleSubmit.bind(this);
        this.radioChange = this.radioChange.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.resetBuilder = this.resetBuilder.bind(this);

    }

    resetBuilder() {
        this.setState(SongForm.initialState)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({errors: nextProps.errors}) // Set or clear errors
    }

    //builds the scale for the class to use
    setScale(key) {
        //swaps accidentals between flats and sharps
        let notes
        if (key === "F") {
            let scale = ["F", "G", "A", "Bb", "C", "D", "E"]
            return scale
        } else if (key.split("").includes("b")) {
            notes = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"]
        } else {
            notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
        }

        //rotates array until the chosen key is the first element
        while (key !== notes[0]) {
            notes.push(notes.shift())
        }

        //pulls out notes in selected key to build scale.
        let scale = []
        scale.push(notes[0])
        scale.push(notes[2])
        scale.push(notes[4])
        scale.push(notes[5])
        scale.push(notes[7])
        scale.push(notes[9])
        scale.push(notes[11])
        return scale
    }

    //function that sets up which chords are major and minor
    buildDiatonicChords(scale) {
        let chords = [];
        for (let i = 0; i < scale.length; i++) {
            if (i === 0 || i === 3 || i === 4) {
                chords.push(`${scale[i]}`)
            } else if (i === 1 || i === 2 || i === 5) {
                chords.push(`${scale[i]}min`)
            } else {
                chords.push(`${scale[i]}dim`)
            }
        }
        return chords
    }

    //function to create secondary dominants based on chosen key
    buildSecondaryDominants(scale) {
        let secondaryDominants = [];
        for (let i = 0; i < scale.length; i++) {
            if (i === 1 || i === 2 || i === 5 || i === 6) {
                secondaryDominants.push(`${scale[i]}7`)
            }
        }
        return secondaryDominants
    }


    //function to build four part chords
    buildExtendedChords(scale) {
        let extendedChords = [];
        for (let i = 0; i < scale.length; i++) {
            if (i === 0 || i === 3) {
                extendedChords.push(`${scale[i]}maj7`)
            } else if (i === 4) {
                extendedChords.push(`${scale[i]}7`)
            } else if (i === 1 || i === 2 || i === 5) {
                extendedChords.push(`${scale[i]}min7`)
            } else {
                extendedChords.push(`${scale[i]}min7b5`)
            }
        }
        return extendedChords
    }

    //function to classify harmonic functions of each chord 
    //Not currently used
    buildHarmonicFunctions(chords) {
        let ton = []
        let sub = []
        let dom = []

        for (let i = 0; i < chords.length; i++) {
            if (i === 0 || i === 5) {
                ton.push(chords[i])
            } else if (i === 1 || i === 3) {
                sub.push(chords[i])
            } else if (i === 4 || i === 6) {
                dom.push(chords[i])
            }
        }

        return {
            tonic: ton,
            subdominant: sub,
            dominant: dom
        }
    }



    //function that takes in all selected chords and builds a chord progression
    buildChordProgression(masterList, harmonicFunctions) {

        let chordProgression = []

        let i = 0;
        while (i < this.state.barCount) {
            chordProgression.push(masterList[Math.floor(Math.random() * masterList.length)])
            i += 1
        }


        if (this.state.resolve === true || this.state.resolve === "true") {
            chordProgression.shift();
            chordProgression.unshift(harmonicFunctions.tonic[0])

            chordProgression.pop();
            chordProgression.pop();
            chordProgression.pop();
            chordProgression.push(harmonicFunctions.subdominant[0])
            chordProgression.push(harmonicFunctions.dominant[0])
            chordProgression.push(harmonicFunctions.tonic[0])
        }

        return chordProgression
    }


    //form update and submit functions
    handleSubmit(e) {  
        e.preventDefault()
        let scale = this.setScale(this.state.key)
        let triads = this.buildDiatonicChords(scale)
        let harmonicFunctions = this.buildHarmonicFunctions(triads)
        let chords = this.buildChordProgression(this.chordMasterList, harmonicFunctions)
        
        
        let song = {
            title: this.state.songTitle,
            key: this.state.key,
            chordProgression: chords,
            songwriter: this.props.author_id
        }
        this.props.composeSong(song)
        .then(e.target.reset())
        .then(this.resetBuilder())       
        
        //clears the form
        // e.target.reset();  
        // this.resetBuilder();        
    }

    updateCheckboxChange(checkBox) {
        this.setState({ [checkBox]: !this.state[checkBox] })
    }

    update(key) {
        return e => this.setState({ [key]: e.currentTarget.value })
    }

    radioChange(e) {
        this.setState({ resolve: !this.state.resolve })
    }

    renderErrors() {        
        return(
          <ul>
            {Object.keys(this.state.errors).map((error, i) => (
              <li key={`error-${i}`} className="song-form-errors">
                {this.state.errors[error]}
              </li>
            ))}
          </ul>
        );        
    }



    render() {

        let chordsToBuildFrom = []

        let scale = this.setScale(this.state.key)
        let triads = this.buildDiatonicChords(scale)
        let extendedChords = this.buildExtendedChords(scale)
        let secondaryDominants = this.buildSecondaryDominants(scale)

        if (this.state.triadsChecked) {
            triads.forEach(function (item) {
                chordsToBuildFrom.push(item)
            })
        }

        if (this.state.extendedChordsChecked) {
            extendedChords.forEach(function (item) {
                chordsToBuildFrom.push(item)
            })
        }

        if (this.state.secondaryDominantsChecked) {
            secondaryDominants.forEach(function (item) {
                chordsToBuildFrom.push(item)
            })
        }

        const chordList = (
            <div className="song-options-list">                
                <ul className="chord-list">
                    {chordsToBuildFrom.map((chord, i) =>
                    (<li className="available-chord"
                        key={i}>
                        {chord}                          
                    </li>))}
                </ul>
            </div>
        )
        this.chordMasterList = chordsToBuildFrom

        return (
            <div className="song-build-centering">
            <div className="song-build-container"> 
                <div className="form-header-container">
                    <h1 className="song-build-header">Build Your Next Song</h1>
                </div>
                <div>
                    {this.renderErrors()}
                    <form onSubmit={this.handleSubmit} className="song-form">
                        <div className="song-form-top-bar">                          
                            <input 
                                type="text"
                                className="song-title-input"
                                onChange={this.update('songTitle')}
                                placeholder="Song Title" 
                                />
                            <h1 className="available-chords-title">Available Chords</h1>
                        </div>
                            <div className="song-form-container">
                            <div className="song-form-title-and-options"></div>
                                <div className="song-build-col1">         
                                    <select 
                                        name="keys"
                                        id="key-selector-dropdown"
                                        onChange={this.update('key')}
                                        className="song-form-input col-1-item">
                                           
                                        <option value="C">C Major</option>
                                        <option value="B">B Major</option>
                                        <option value="Bb">Bb Major</option>
                                        <option value="A">A Major</option>
                                        <option value="Ab">Ab Major</option>
                                        <option value="G">G Major</option>
                                        <option value="Gb">Gb Major</option>
                                        <option value="F">F Major</option>
                                        <option value="E">E Major</option>
                                        <option value="Eb">Eb Major</option>
                                        <option value="D">D Major</option>
                                        <option value="Db">Db Major</option>
                                    </select>

                                    <select 
                                        name="bar-count"
                                        id="bar-count-selector-dropdown"
                                        onChange={this.update('barCount')}
                                        className="song-form-input col-1-item"
                                        >
                                        <option value="8">8 Bars</option>
                                        <option value="12">12 Bars</option>
                                        <option value="16">16 Bars</option>
                                        <option value="24">24 Bars</option>
                                        <option value="32">32 Bars</option>
                                    </select>
                                    <div className="radio-button-container col-1-item">
                                        <label>
                                            <input type="radio"
                                                id="resolve-radio-button"
                                                className="resolve-toggle"
                                                value="true"
                                                checked={this.state.resolve ? true : false}
                                                onChange={this.radioChange}
                                                /> Resolve
                                        </label>

                                        <label>
                                            <input type="radio"
                                                id="dont-resolve-radio-button"
                                                className="resolve-toggle"
                                                value="false"
                                                checked={!this.state.resolve ? true : false}
                                                onChange={this.radioChange}
                                                /> Don't Resolve
                                        </label>
                                    </div>
                                </div>
                                <div className="song-build-col2"> 
                                    <div className="checkboxes-container">
                                        <label>
                                            <input 
                                                type="checkbox"
                                                id="triads-checkbox"
                                                className="checkbox"
                                                name="triads"
                                                checked= {this.state.triadsChecked ? true : false}
                                                onChange={() => this.updateCheckboxChange('triadsChecked')} 
                                                /> Triads    
                                        </label>
                                        <label>
                                            <input type="checkbox"
                                                id="-checkbox"
                                                className="checkbox"
                                                name="extended-chords"
                                                checked= {this.state.extendedChordsChecked ? true : false}
                                                onChange={() => this.updateCheckboxChange('extendedChordsChecked')} 
                                                /> Extended Chords
                                        </label>
                                        <label>
                                            <input type="checkbox"
                                                id="-checkbox"
                                                className="checkbox"
                                                name="secondary-dominants"
                                                checked= {this.state.secondaryDominantsChecked ? true : false}
                                                onChange={() => this.updateCheckboxChange('secondaryDominantsChecked')} 
                                                /> Secondary Dominants
                                        </label>
                                    </div>
                                <input
                                    type="submit"
                                    value="Compose"
                                    className="song-form-submit"
                                    />
                                    
                                </div>  
                            <div className="song-form-available-chords">                          
                                <div className="song-build-col3"> 
                                    <h1 className="available-chords">{chordList}</h1>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        )
    }
};

export default SongForm;
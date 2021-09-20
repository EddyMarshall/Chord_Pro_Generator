import React from 'react'

class SongForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            songTitle: "",
            key: "C",
            chordProgression: [],
            triadsChecked: false,
            extendedChordsChecked: false,
            secondaryDominantsChecked: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        // this.updateCheckboxChange = this.handleCheckboxChange.bind(this)
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
        while (key != notes[0]) {
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

    handleSubmit(e) {
        e.preventDefault()
    }

    updateCheckboxChange(checkBox) {
        this.setState({ [checkBox]: !this.state[checkBox] })
    }

    update(key) {
        return e => this.setState({ [key]: e.currentTarget.value })
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
                <ul className="chord-list">Available Chords:
                    {chordsToBuildFrom.map((chord, i) =>
                    (<li className="available-chord"
                        key={i}>
                        {chord}
                    </li>))}
                </ul>
            </div>
        )


        return (

            <div className="song-build-container">
                {chordList}

                <div className="song-form-container">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"
                            className="song-form-input song-title-input"
                            id="song-title-input"
                            onChange={this.update('songTitle')}
                            placeholder="Title" />

                        <select name="keys"
                            id="key-selector-dropdown"
                            onChange={this.update('key')}
                        >
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

                        <label>Triads
                            <input type="checkbox"
                                id="triads-checkbox"
                                className="checkbox"
                                name="triads"
                                onChange={() => this.updateCheckboxChange('triadsChecked')} />

                        </label>

                        <label>Extended Chords
                            <input type="checkbox"
                                id="-checkbox"
                                className="checkbox"
                                name="extended-chords"
                                onChange={() => this.updateCheckboxChange('extendedChordsChecked')} />

                        </label>

                        <label>Secondary Dominants
                            <input type="checkbox"
                                id="-checkbox"
                                className="checkbox"
                                name="secondary-dominants"
                                onChange={() => this.updateCheckboxChange('secondaryDominantsChecked')} />

                        </label>

                        <div className="radio-button-container">
                            <label>Resolve
                                <input type="radio"
                                    id="resolve-radio-button"
                                    className="resolve-toggle"
                                    value="resolve-true"
                                />
                            </label>

                            <label>Don't Resolve
                                <input type="radio"
                                    id="dont-resolve-radio-button"
                                    className="resolve-toggle"
                                    value="resolve-false" />
                            </label>
                        </div>

                        <input type="submit" className="song-form-submit" value="Compose" />
                    </form>
                </div>
            </div>
        )
    }


}

export default SongForm
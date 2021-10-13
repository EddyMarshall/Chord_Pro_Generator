const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateBoardInput(song) {
    let errors = {};

    // song.title = validText(song.title) ? song.title : '';
    if (Validator.isEmpty(song.title)) {
        errors.title = 'Please give your song a title';
    }
    
    // song.key = validText(song.key) ? song.key : '';
    // if (Validator.isEmpty(song.key)) {
    //     errors.key = 'Song needs a key';
    // }

    // song.chordProgression = song.chordProgression ? song.chordProgression : [];
    if (song.chordProgression.includes(null)) {
        errors.chordProgression = 'Your song needs chords';
    }
    
    // song.songwriter = validText(song.songwriter) ? song.songwriter : '';
    // if (Validator.isEmpty(song.songwriter)) {
    //     errors.songwriter = 'Song needs a songwriter';
    // } 

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}
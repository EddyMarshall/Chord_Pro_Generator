const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateBoardInput(song) {
    let errors = {};

    song.title = validText(song.title) ? song.title : '';
    if (Validator.isEmpty(song.title)) {
        errors.title = 'Song needs a title';
    }
    
    song.key = validText(song.key) ? song.key : '';
    if (Validator.isEmpty(song.key)) {
        errors.key = 'Song needs a key';
    }

    song.chordProgression = song.chordProgression ? song.chordProgression : [];
    if (song.chordProgression.length === 0) {
        errors.chordProgression = 'Song needs a chord progression';
    }
    
    song.songwriter = validText(song.songwriter) ? song.songwriter : '';
    if (Validator.isEmpty(song.songwriter)) {
        errors.songwriter = 'Song needs a songwriter';
    } 

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}
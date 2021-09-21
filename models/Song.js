const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    key: {
        type: String,
        required: true
    },
    chordProgression: {
        type: Array,
        required: true
    },
    songwriter: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = Song = mongoose.model('song', SongSchema);
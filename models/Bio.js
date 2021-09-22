const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BioSchema = new Schema({
    about: {
        type: String
    },
    location: {
        type: String
    },
    socialMedia: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
});

module.exports = Song = mongoose.model('bio', BioSchema);
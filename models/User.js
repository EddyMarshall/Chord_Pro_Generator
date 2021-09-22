const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    handle: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    about: {
        type: String
    },
    location: {
        type: String
    },
    socialMedia: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = User = mongoose.model('users', UserSchema);
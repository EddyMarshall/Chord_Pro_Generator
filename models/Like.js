const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LikeSchema = new Schema({
    liker: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    song: {
        type: Schema.Types.ObjectId,
        ref: 'songs'
    }
}, {
    timestamps: true
});

module.exports = Like = mongoose.model('likes', LikeSchema);
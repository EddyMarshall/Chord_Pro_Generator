const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PeerReviewSchema = new Schema({
    reviewer: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    parent_song: {
        type: Schema.Types.ObjectId,
        ref: 'songs'
    },
    body: {
        type: String,
        required: true
    }}, 
    {
        timestamps: true
    }
);

module.exports = PeerReview = mongoose.model('peerreviews', PeerReviewSchema);
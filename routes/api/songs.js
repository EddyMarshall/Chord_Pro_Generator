const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Song = require('../../models/Song');
const User = require('../../models/User')
const validateSongInput = require('../../validation/song');

router.post('/', passport.authenticate('jwt', { session: false }),
    (request, response) => {
        const { errors, isValid } = validateSongInput(request.body);
        if (!isValid) {
            return response.status(404).json(errors)
        }
        console.log(request.body)
        let song = new Song({
            title: request.body.title,
            chordProgression: request.body.chordProgression,
            key: request.body.key,
            songWriter: request.user.id,
        })

        const songObject = Song.findById(song)

        // song.users.push(req.user.id);
        // song.save();
        // User.findById(req.user.id)
        //     .then(user => {
        //         user.ownedDrawingBoards.push(song.id)
        //         user.save();
        //     });
        // res.json(song.toObject());
    }
)

module.exports = router;
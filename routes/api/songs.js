const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken')

const Song = require('../../models/Song');
const User = require('../../models/User')
const validateSongInput = require('../../validation/song');

router.post('/', 
// passport.authenticate('jwt', { session: false }),
    (request, response) => {
        const { errors, isValid } = validateSongInput(request.body);
        if (!isValid) {
            console.log(errors)
            return response.status(400).json(errors)
        }
        let song = new Song({
            title: request.body.title,
            chordProgression: request.body.chordProgression,
            key: request.body.key,
            songwriter: request.body.songwriter,
        })
   
        song.save()
            .then(song => response.json(song));
    }
)

router.delete('/:id', (request, response) => {

    Song.findOneAndDelete({
        _id: request.params.id
    })
        .then(() => response.json({ msg: request.params.id }),
            () => response.json({ msg: "Error during delete attempt" }));

});

module.exports = router;
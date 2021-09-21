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
        console.log(request.body)
        const { errors, isValid } = validateSongInput(request.body);
        if (!isValid) {
            return response.status(400).json(errors)
        }
        let song = new Song({
            title: request.body.title,
            chordProgression: request.body.chordProgression,
            key: request.body.key,
            songwriter: request.params.user_id,
        })

        song.save()
            .then(song => response.json(song));
    }
)

module.exports = router;
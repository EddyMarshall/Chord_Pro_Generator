const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken')

const Song = require('../../models/Song');
const User = require('../../models/User')
const validateSongInput = require('../../validation/song');


// create song
router.post('/', 
// passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateSongInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors)
        }
        let song = new Song({
            title: req.body.title,
            chordProgression: req.body.chordProgression,
            key: req.body.key,
            songwriter: req.body.songwriter,
        })
        song.save()
            .then(song => res.json(song));
    }
)

router.get('/:songId', (req, res) => {
    Song.findById(req.params.songId)
        .then(song => res.json(song))
        .catch(error => res.status(404).json({ error: 'This song cannot be found'}))
})

router.get('/', (req, res) => {
    Song.find({}, (err, songs) => {
        var songMap = {};
        songs.forEach((song) => {
            songMap[song._id] = song;
        });
        res.send(songMap);
    });
});

// get the repertoire of current user
router.get('/user/:userId', (req,res) => {
    Song.find({songwriter: req.params.userId}, (err, songs) => {
        var songMap = {};
        songs.forEach((song) => {
            songMap[song._id] = song;
        });
        res.send(songMap);
    });
});

router.put('/:songId', (req, res) => {
    Song.findById(req.params.songId)
        .then(oldSong => {
            if (!oldSong) {
                return res.status(404).json({ error: 'This song cannot be found' })
            }
            Object.assign(oldSong, req.body)
            let changedSong = new Song(oldSong);
            try {
                changedSong.save()
                res.json(changedSong)
            } catch (err) {
                res.status(500).send({ error: 'Cannot update this Song' })
            }
        })
});

router.delete('/:id', (req, res) => {
    Song.findOneAndDelete({
        _id: req.params.id
    })
    .then(() => res.json({ msg: req.params.id }),
        () => res.json({ msg: "Error during delete attempt" }));
});

module.exports = router;
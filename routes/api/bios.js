const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const Bio = require('../../models/Bio');


// IMPORTANT DO VALIDATIONS



router.post('/',
    (req, res) => {

        let bio = new Bio({
            about: req.body.about,
            location: req.body.location,
            socialMedia: req.body.socialMedia,
            user: req.body.user
        });

        bio.save()
            .then(bio => res.json(bio));
    }
);

router.get('/:userId', (req, response) => {

    Bio.findOne({user: req.params.userId})
        .then(bio => response.json(bio))
        .catch((error) => response.status(404).json({ error: `Bio not found error: ${error}` }))
});

router.put('/:bioId', (request, response) => {
    Song.findById(request.params.bioId)
        .then(oldBio => {
            if (!oldBio) {
                return response.status(404).json({ error: 'Bio not found' })
            }


            Object.assign(oldBio, request.body)
            let updatedBio = new Song(oldBio);
            try {
                updatedBio.save()
                response.json(updatedBio)
            } catch (error) {
                response.status(500).send({ error: `Bio not updated error: ${error}` })
            }
        });
});



module.exports = router;
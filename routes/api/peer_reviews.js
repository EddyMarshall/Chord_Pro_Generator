const express = require("express");
const router = express.Router();
const passport = require("passport");
const PeerReview = require('../../models/PeerReview');

router.get("/test", (req, res) => res.json({ msg: "This is the peer-reviews route" }));

router.get('/', (req, res) => {
    PeerReview.find({}, (err, peerreviews) => {
        var peerreviewMap = {};
        peerreviews.forEach((peerreview) => {
            peerreviewMap[peerreview._id] = peerreview;
        });
        res.send(peerreviewMap);
    });
});

router.get('/:peerreviewId', (req, res) => {
    PeerReview.findById(req.params.peerreviewId)
        .then(peerreview => res.json(peerreview))
        .catch(error => res.status(404).json({ error: 'This peerreview cannot be found' }))
});

router.get('/song/:songId', (req, res) => {
    PeerReview.find({ parent_song: req.params.songId }, (err, reviews) => {
        var reviewMap = {};
        reviews.forEach((review) => {
            reviewMap[review._id] = review;
        });
        res.send(reviewMap);
    });
});

router.post("/", (req, res) => {
        const newPeerReview = new PeerReview({
            reviewer: req.body.reviewer,
            parent_song: req.body.parent_song,
            body: req.body.body
        });
        newPeerReview
            .save()
            .then(peerreview => res.json(peerreview))
});

router.delete('/:id', (req, res) => {
    PeerReview.findOneAndDelete({
        _id: req.params.id
    })
        .then(() => res.json({ msg: req.params.id }),
            () => res.json({ msg: "Error during delete post attempt" }));
});

router.put('/:id', (req, res) => {
    PeerReview.findById(req.params.id)
        .then(oldPeerReview => {
            if (!oldPeerReview) {
                return res.status(404).json({ error: 'This peer review cannot be found' })
            }

            Object.assign(oldPeerReview, req.body)
            let changedPeerReview = new PeerReview(oldPeerReview);
            try {
                changedPeerReview.save()
                res.json(changedPeerReview)
            } catch (err) {
                res.status(500).send({ error: 'Cannot update this peer review' })
            }
        })
});

module.exports = router;
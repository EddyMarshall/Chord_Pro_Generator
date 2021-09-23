const express = require("express");
const router = express.Router();
const passport = require("passport");
const Like = require('../../models/Like');

router.get("/test", (req, res) => res.json({ msg: "This is the likes route" }));

router.get('/', (req, res) => {
    Like.find({}, (err, likes) => {
        var likeMap = {};
        likes.forEach((like) => {
            likeMap[like._id] = like;
        });
        res.send(likeMap);
    });
});

router.get('/:likeId', (req, res) => {
    Like.findById(req.params.likeId)
        .then(like => res.json(like))
        .catch(error => res.status(404).json({ error: 'This like cannot be found' }))
})

router.post("/",

    (req, res) => {
        const newLike = new Like({
            liker: req.body.liker,
            parent_song: req.body.parent_song
        });
        newLike
            .save()
            .then(like => res.json(like))
    }
);

router.delete('/:id', (req, res) => {

    Like.findOneAndDelete({
        _id: req.params.id
    })
        .then(() => res.json({ msg: req.params.id }),
            () => res.json({ msg: "Error during unlike attempt" }));

});



module.exports = router;
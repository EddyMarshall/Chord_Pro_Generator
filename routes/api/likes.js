const express = require("express");
const router = express.Router();
const passport = require("passport");
const Like = require('../../models/Like');

router.get("/test", (req, res) => res.json({ msg: "This is the likes route" }));

router.post("/",

    (req, res) => {
        const newLike = new Like({
            liker: req.body.liker,
            song: req.body.song
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
const express = require("express");
const router = express.Router();
const passport = require("passport");
const Follow = require('../../models/Follow');

router.get("/test", (req, res) => res.json({ msg: "This is the follows route" }));

router.post("/",

    (req,res) => {
        const newFollow = new Follow({
            follower: req.body.follower,
            followed: req.body.followed
        });
        newFollow
            .save()
            .then(follow => res.json(follow))
    }
);

router.delete('/:id', (req, res) => {
    
    Follow.findOneAndDelete({
        _id: req.params.id
    })
        .then(() => res.json({ msg: req.params.id }),
            () => res.json({ msg: "Error during unfollow attempt" }));
 
});



module.exports = router;
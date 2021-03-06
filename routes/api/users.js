const jwt = require('jsonwebtoken');
const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const keys = require('../../config/keys');
const passport = require("passport");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        var userMap = {};
        users.forEach((user) => {
            userMap[user._id] = user;
        });
        res.send(userMap);
    });
});

router.get('/:userId', (req, res) => {
    User.findById(req.params.userId)
        .then(user => res.json(user))
        .catch(error => res.status(404).json({ error: 'This user cannot be found'}))
})


router.post('/register', (req, res) => {
    const {errors, isValid} = validateRegisterInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }

    
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {                
                return res.status(400).json({ email: "A user has already registered with this address" })
            } else {                
                const newUser = new User({
                    handle: req.body.handle,
                    email: req.body.email,
                    password: req.body.password
                })

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    })
                })
            }
        })
});



router.post('/login', (req, res) => {
    const {errors, isValid } = validateLoginInput(req.body);
    if(!isValid){
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ email: 'This user does not exist' });
            }
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {
                            id: user.id,
                            handle: user.handle,
                            email: user.email
                        }
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            {expiresIn: 3600},
                            (err,token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                });
                            }
                        )                    
                    } else {
                        return res.status(400).json({ password: 'Incorrect password' });
                    }
                })
        })
});



module.exports = router;
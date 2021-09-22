const jwt = require('jsonwebtoken');
const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const keys = require('../../config/keys.js');
const passport = require("passport");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const { response } = require('express');

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));



router.get('/:userId', (req, res) => {
    // debugger;
    // let a = req.params;
    // a.a = "a";
    // res.json({ msg: req.params.userId});
    // res.json({ msg: req.params.userId});
    console.log(req.params.userId.toString());
    User.findOne({ _id: req.params.userId })
        .then((user) => {
            let bio = {};
            bio.name = user.name;
            bio.about = user.about;
            bio.location = user.location;
            bio.socialMedia = user.socialMedia;


            // BIO VALIDATIONS GO HERE IMPORTANT!
            res.json(bio);
        });

});

router.put('/:userId/bio', (req, res) => {
    //  VALIDATE IMPORTANT!
    // const name = req.body.name
    // console.log(req)
    // res.json(req.body);
    User.findById(req.params.userId)
        .then((oldUser) => {

            if (!oldUser) {
                return res.status(400).json({ error: 'not found user' });
            };

            // let newUser = Object.assign({}, oldUser, req.body);
            // return res.json(newUser);


            Object.assign(oldUser, req.body);
            

            let updatedUser = new User(oldUser);

            oldUser.socialMedia = "heyy";
            oldUser.save();

            console.log("bio");
            console.log(req.body);

            console.log("updated user");
            console.log(updatedUser);
            console.log("old user")
            console.log(oldUser);

            // res.json(updatedUser);

            // updatedUser.save()
            //     .then((user) => res.json(user))
            //     .catch(res.status(400).json({ bio: 'Incorrect bio' }));

            try {
                updatedUser.save();
                response.json(updatedUser);
            } catch (err) {
                res.status(500).json({ error: 'Incorrect bio' });
            };
            
            // let bio = {};
            // user.name = req.body.name;
            // user.about = req.body.about;
            // user.location = req.body.location;
            // user.socialMedia = req.body.socialMedia;

            // var conditions = {id: req.params.userI};
            // const id = req.params.id;
            // User.save(id, req.body)
            //     // .then((user) => res.json(user))
            // .catch(res.status(400).json({ bio: 'Incorrect bio' }));
        });
});

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
                            // .catch(err => console.log(err));
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
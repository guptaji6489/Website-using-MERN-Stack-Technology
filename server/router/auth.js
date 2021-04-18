const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
require('../db/conn');
const User = require('../model/userSchema')

router.get('/', (res) => {
    res.send("hello home from auth.js");
});

// using promises
// router.post('/register', (req, res) => {
//     const { name, email, phone, work, password, cpassword } = req.body;

//     if (!name || !email || !phone || !work || !password || !cpassword) {

//         return res.status(422).json({ error: "empty field!" });
//     }
//     console.log(req.body);

//     User.findOne({ email: email })
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: "email already exist!" });
//             }

//             const user = new User({ name, email, phone, work, password, cpassword });

//             user.save().then(() => {
//                 res.status(201).json({ message: "registered success!" });
//             }).catch((err) => res.status(500).json({ error: "failed" }));

//         }).catch(err => { console.log(err) })

// })


// registration page
router.post('/register', async(req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {

        return res.status(422).json({ error: "empty field!" });
    }
    console.log(req.body);

    try {

        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "email already exist!" });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "password not match" });
        } else {
            const user = new User({ name, email, phone, work, password, cpassword });
            const userRegister = await user.save();
            if (userRegister)
                res.status(201).json({ message: "registered success!" });
        }
    } catch (err) {
        console.log(err);
    }
});

// login page 
router.post('/signin', async(req, res) => {
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(422).json({ error: "empty field!" });
        }

        const userLogin = await User.findOne({ email: email });
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            token = await userLogin.generateAuthToken();
            console.log(token);
            if (isMatch) {
                return res.json({ message: "user login sucess!" });
            } else
                return res.json({ message: "Authentication Failed!" });
        } else
            return res.json({ message: "Authentication Failed!" });

    } catch (err) {
        console.log(err);
    }
});



module.exports = router;
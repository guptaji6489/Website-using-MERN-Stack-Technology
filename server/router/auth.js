const express = require('express');
const router = express.Router();
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
        }

        const user = new User({ name, email, phone, work, password, cpassword });
        const userRegister = await user.save();
        if (userRegister)
            res.status(201).json({ message: "registered success!" });


    } catch (err) {
        console.log(err);
    }
});


module.exports = router;
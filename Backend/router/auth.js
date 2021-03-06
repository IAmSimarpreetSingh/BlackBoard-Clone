const express = require('express');
const bcryptjs = require('bcryptjs');
const authenticate = require('../middleware/authenticate');
const adminauth = require('../middleware/authenticate')
const app = express();
const cookies = require("cookie-parser");
app.use(cookies());
const router = express.Router();


require('../db/conn');

const User = require("../model/userSchema");
const Admin = require("../model/adminSchema")

// Middleware
// This will check if user is authenticated 
const middleware = (req, res, next) => {
    console.log("This is my middleware");
    next();
}

router.get('/', (req, res) => {
    res.send(`Hello World From Server auth.js`);
});

router.get('/Home', middleware, (req, res) => {
    res.send(`Home`);
});

// Adding data into mongodb and validating data using async and await
router.post('/register', async (req, res) => {

    const { section, name, uid, role, courses, password } = req.body;

    if (!section || !name || !uid || !role || !courses || !password) {
        return res.status(422).json({ error: "Empty Field" });
    }

    try {

        const userExist = await User.findOne({ uid: uid });

        if (userExist) {
            return res.status(422).json({ error: "UID allready Exist" });
        }

        const user = new User({ section, name, uid, role, courses, password });

        // Password Hashing -> 

        const dataSaved = await user.save();

        if (dataSaved) {
            res.status(201).json({ message: "Entered Success" });

        }

    } catch (err) {
        console.log(err);
    }

});

//Register Admin
router.post('/registerAdmin', async (req, res) => {

    const { name, uid, password } = req.body;

    if (!name || !uid || !password) {
        return res.status(422).json({ error: "Empty Field" });
    }

    try {

        const userExist = await Admin.findOne({ uid: uid });

        if (userExist) {
            return res.status(422).json({ error: "UID allready Exist" });
        }

        const admin = new Admin({ name, uid, password });

        // Password Hashing -> 

        const dataSaved = await admin.save();

        if (dataSaved) {
            res.status(201).json({ message: "Entered Success" });
        }

    } catch (err) {
        console.log(err);
    }

});


// Login route 
router.post('/signin', async (req, res) => {

    try {

        const { uid, password } = req.body;

        if (!uid || !password) {
            return res.status(400).json({ error: "Empty Data" });
        }

        const userUID = await User.findOne({ uid: uid });

        if (userUID) {

            // Hash Password Check
            const isMatch = await bcryptjs.compare(password, userUID.password);

            const token = await userUID.generateAuthToken();

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 2592000000),
                httpOnly: true,
            });

            if (!isMatch) {
                return res.status(400).json({ error: "Pass Error" });
            } else {
                return res.status(200).json({ message: userUID });
            }

        } else {
            return res.status(400).json({ error: "No uid found" });
        }


    } catch (err) {
        console.log(err);
    }

});

//ADMIN LOGIN
router.post('/admin', async (req, res) => {

    try {

        const { uid, password } = req.body;

        if (!uid || !password) {
            return res.status(400).json({ error: "Empty Data" });
        }

        const userUID = await Admin.findOne({ uid: uid });

        if (userUID) {

            // Hash Password Check
            const isMatch = await bcryptjs.compare(password, userUID.password);

            const token = await userUID.generateAuthToken();

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 2592000000),
                httpOnly: true,
            });

            if (!isMatch) {
                return res.status(400).json({ error: "Pass Error" });
            } else {
                return res.status(200).json({ message: userUID });
            }

        } else {
            return res.status(400).json({ error: "No uid found" });
        }


    } catch (err) {
        console.log(err);
    }

});


// Profile Page
router.get('/profile', authenticate, (req, res) => {
    res.send(req.rootUser);
});

router.get('/adminpanel', adminauth, (req, res) => {
    res.send(req.adminUser);
});

router.get('/courses', authenticate, (req, res) => {
    res.send(req.rootUser);
});

router.get('/signout', (req, res) => {
    res.clearCookie('jwtoken', { path: '/' });
    res.status(200).send('User Logout');
});


module.exports = router;
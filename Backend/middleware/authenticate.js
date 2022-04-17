const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");


const Authenticate = async (req, res, next) => {
    try{

        function getcookie(req) {
            const cookie = req.headers.cookie;
            return cookie.slice(8);
        }

        
        const token = getcookie(req);
        // console.log(token);
        
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token});

        if(!rootUser) {throw new Error('User not found')};

        req.token = token;
        req.rootUser = rootUser;
        req.UserID = rootUser._id;

        next();


    }catch (err) {
        res.status(401).send('Unauthorized:No token provided');
        console.log(err);
    }
};

module.exports = Authenticate;
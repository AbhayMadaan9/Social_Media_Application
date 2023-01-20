
const jwt = require('jsonwebtoken')


const verifyUser = (req, res, next)=>{
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json("Login In First")

    jwt.verify(token, process.env.JWT_KEY, (err, userInfo)=>{
        if(err) return res.status(401).json("Logout and Login again")
        req.id = userInfo.id;
    });

    
    next();

}
module.exports = verifyUser;
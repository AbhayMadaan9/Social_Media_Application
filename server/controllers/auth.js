const db = require('../connection')
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
require('dotenv').config()


const register = async (req, res) => {
 
    //User exists

    const q = "SELECT username FROM users WHERE username = ?";
    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).send(err)
        if (data.length) return res.status(409).json("user already exists!!!")
    })
    //New User 

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(req.body.password, salt, function (err, hash) {
            if (err) return res.status(500).send(err)
            else {

                const q = 
                    "INSERT INTO users (`username`,`email`,`password`,`name`, `city`) VALUE (?)";
                const values = [req.body.username, req.body.email, hash, req.body.name, req.body.city];
                db.query(q, [values], (err, data) => {
                    if (err) return res.status(500).send(err)
                    else return res.status(200).json(data)
                })
            }
        });

    });


}
const login = (req, res) => {

        const q = "SELECT * FROM users WHERE username = ?"; //this will return array of data
        db.query(q, [req.body.username], (err, data) => {
            if (err) return res.status(500).send(err)
            if (data.length == 0) return res.status(409).json("user not found!!!")
            bcrypt.compare(req.body.password, data[0].password, function(err, result) {
                if(result)
                { 
                    const token = jwt.sign({id:data[0].id}, process.env.JWT_KEY)

        const {password, ...others} = data[0] //it will remove password

     return res.cookie("accessToken", token, {
            httpOnly: true //it means we can send and pass cookie through websites any random scripts can't access our cookie
        }).status(200).json(others) //this information is send from this api to the client when used
                } 
                if(err) return res.status(400).send("Check password")
        });
        
        
        })
     
}
const logout = (req, res) => { 
    res.clearCookie("accessToken",{ //some configurations
        secure: true,
        sameSite:"none"
    }).status(200).send("Logout successfully")
}

module.exports = { register, login, logout }


const db = require('../connection')
const jwt = require('jsonwebtoken')
require("dotenv").config()
const moment = require('moment')


  const getposts = (req, res)=>{
 
 

    const q = 'SELECT P.*, U.id AS user_id, U.profilePic, U.name FROM posts AS P JOIN users AS U  ON (P.user_id = U.id) LEFT JOIN relationships AS R ON (P.user_id = R.follows_id) WHERE R.followers_id = ? OR P.user_id = ? ORDER BY P.Created_at DESC' //? is user of the application which we will get it from user 
    //puspose of 2 joins is to get user info from users table so that we can see who have posted this post and another join is to get only those post whom application user follows and user post too.     
    db.query(q,[req.id, req.id], (err, data)=>{
        if(err) return res.status(500).json(err)
        else return res.status(200).json(data)
    })
}
const addpost = (req, res)=>{

    const q = 'INSERT INTO posts (`desc`, `img`, `Created_at`, `user_id`) VALUES (?)'    

    const values = [
        req.body.desc,
        req.body.img,
       moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        req.id
    ]
    db.query(q,[values], (err, data)=>{
        if(err) return res.status(500).json(err)
        else return res.status(200).send("Post has been added succesfully")
    })

}
const deletePost = (req, res)=>{
    console.log(req.query.userId);
        try {
            if(req.id == req.query.userId){
                const q = 'DELETE FROM posts WHERE  id=?'   
                db.query(q,[req.query.postid], (err)=>{
                    if(err) return res.status(500).json(err)
                    else return res.status(200).send("Post deleted succesfully")
                })
                
            }
            else return res.status(500).send("You are not the User")
        } catch (error) {
            return res.status(500).send("something went wrong")
        }
   
}
module.exports = {getposts, addpost, deletePost}
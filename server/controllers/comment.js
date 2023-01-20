const db = require('../connection');
const moment = require('moment')

const getComments = (req, res)=>{

    const q = 'SELECT C.*, U.id AS userID, name, profilePic FROM comments AS C JOIN users AS U ON(C.comments_user_id = U.id) WHERE C.post_ID = ? ORDER BY c.created_at DESC'
    db.query(q,[req.query.postID], (err, data)=>{
        if(err) return res.status(500).json(err)
        else return res.status(200).json(data)
    })
}

const addComment = (req, res)=>{
    

    const q = 'INSERT INTO comments(`desc`, `created_at`, `comments_user_id`, `post_ID`) VALUES (?)'
    const values = [
     req.body.desc,
       moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
       req.id,
     req.body.postId
    ]
    db.query(q,[values], (err, data)=>{
        if(err) return res.status(500).json(err)
        else return res.status(200).json(data)
    })
}

const deleteComment = (req, res)=>{

}



module.exports = {getComments, deleteComment, addComment}
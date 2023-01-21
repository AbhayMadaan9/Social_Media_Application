const db = require('../connection')

const getlikes = (req, res)=>{
    const q = 'SELECT likes_user_id FROM likes WHERE likes_post_id = ?'

    db.query(q,[req.query.postID], (err, data)=>{
        if(err) return res.status(500).json(err)
        else return res.status(200).json(data.map(like=>like.likes_user_id)) //so that we directy get no. instead of objects
    })

}
module.exports = {getlikes}
const express = require('express')
const router = express.Router()
const postss = require('../controllers/post');
const verfiedUser = require('../Middlewares/VerifyUser')

router.get('/posts', verfiedUser, postss.getposts)
router.post('/addpost', verfiedUser, postss.addpost)
router.delete('/deletePost', verfiedUser, postss.deletePost)

module.exports = router;
const {getComments, addComment, deleteComment} = require('../controllers/comment');
const express = require('express')
const router = express.Router()
const verfiedUser = require('../Middlewares/VerifyUser')

router.get('/Comments', verfiedUser, getComments)
router.get('/addComment', verfiedUser, addComment)
router.get('/deleteComment', verfiedUser, deleteComment)


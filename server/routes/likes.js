const express = require('express')
const router = express.Router()
const like = require('../controllers/like');
const verfiedUser = require('../Middlewares/VerifyUser')

router.get('/likes', verfiedUser, like.getlikes)

module.exports = router;
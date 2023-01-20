const cmts = require('../controllers/comment');
const express = require('express')
const router = express.Router()
const verfiedUser = require('../Middlewares/VerifyUser')

router.get('/Comments', verfiedUser, cmts.getComments)
router.post('/addComment', verfiedUser, cmts.addComment)
router.delete('/deleteComment', verfiedUser, cmts.deleteComment)

module.exports = router
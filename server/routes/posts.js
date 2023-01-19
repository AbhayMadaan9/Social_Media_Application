const express = require('express')
const router = express.Router()


router.post('/posts',  require('../controllers/post'))

module.exports = router;
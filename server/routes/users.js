const express = require('express')
const router = express.Router()
const getuser = require('../controllers/user')


router.get('/Userdata', getuser)

module.exports = router;
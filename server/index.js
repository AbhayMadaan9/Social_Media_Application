const express = require("express")
const app = express()
const db = require('./connection')
const cors = require('cors')
db.connect()
//middlewares
app.use(express.json())
app.use(cors())

const authRoute = require('./routes/auths')

//endpoints
app.use('/auth', authRoute)


app.listen(5500, ()=>{console.log('listening at http://localhost:5500')})
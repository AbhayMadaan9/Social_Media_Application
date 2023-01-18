const express = require("express")
const app = express()
const db = require('./connection')
const cors = require('cors')
const cookieParser = require('cookie-parser')
db.connect()

//middlewares
// app.use((req, res, next) => {
//     //res.header("Access-Control-Allow-Credentials", true);
//     res.header('Access-Control-Allow-Origin', req.header('origin') );
//   //  res.header("Access-Control-Allow-Origin", "*")
//     next();
//   });
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
  app.use(express.json());
  app.use(
    cors()
  );
  app.use(cookieParser())
app.use(cors({credentials: true, origin: true}))

const authRoute = require('./routes/auths')     

//endpoints
app.use('/auth', authRoute)


app.listen(5500, ()=>{console.log('listening at http://localhost:5500')})
require("dotenv").config()

const express = require('express')
const cors = require("cors")
const path = require("path")
const fs = require("fs")
const router = require('./routes/user.routes')
const pdf = require("./controlers/pdf")
const cookieparser = require("cookie-parser")
//const multer  = require('multer')
const data = require("./base/data")
const app = express()
//const upload = require("./controlers/multer")

const port = process.env.PORT
app.use(express.json())
app.use(cookieparser())
app.use(cors())
app.use(express.static(path.resolve(__dirname,"build/")))
app.use("/api",router) 

app.get('/message', function(req, res) { res.send ( { mes:"message" } ) } );

app.get('/data', function(req, res){
  res.send(data);
});
const url = "http://45.141.78.58:80"

app.get('*', function(req, res){
  res.redirect(url)
});



console.log(__dirname)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
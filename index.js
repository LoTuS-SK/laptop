require("dotenv").config()

const express = require('express')
const cors = require("cors")
const path = require("path")
const fs = require("fs")
const router = require('./routes/user.routes')
const pdf = require("./controlers/pdf")
const cookieparser = require("cookie-parser")
const app = express()

const port = process.env.PORT

app.use(express.json())
app.use(cookieparser())
app.use(cors())
app.use(express.static(path.resolve(__dirname,"build/")))
app.use("/api",router) 
app.get('/message', function(req, res) { res.send ( { mes:"message" } ) } );
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'build', 'index.html')));
app.listen(port, () => {console.log(`Example app listening on port ${port}`)})
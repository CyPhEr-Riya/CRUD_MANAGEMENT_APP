const express = require('express');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, './.env')});
//const dotenv = require('dotenv').config();

const connectDB = require('./server/database/connection');
//DATABASE_URL="mongodb://localhost:3000/PersonalityTest"

const app = express();

//dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 8080

// log requests
app.use(morgan('tiny'));

// mongodb connection
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

// set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// load routers
app.use('/', require('./server/routes/router'))

app.get('/',(_req,res)=>{
    res.send("Crud Application");
})

app.listen(PORT,()=> {console.log(`Server is running on http://localhost:${PORT}`)});

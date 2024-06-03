const express = require('express');
const app = express();
const userAuth = require('./route/userAuth.route')
const mongoose = require('mongoose')


app.get('/', () => {
    console.log("running")
})

// using route
app.use('/api/', userAuth)


// connecting database and starting server
mongoose.connect("mongodb://localhost:27017/userAuth")
    .then(() => {
        console.log("database connected")
        app.listen(3002, () => {
            console.log("server starts on 3002")
        })
    })
    .catch(error =>{
        console.log(error)
    })
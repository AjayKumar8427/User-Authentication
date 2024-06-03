const express = require('express');
const { loginRoute, signupRoute } = require('../controller/userAuth.controller');
const routes =express.Router();

// routes and passing callback function name

routes.post('/signup',signupRoute)
routes.get('/login',loginRoute)

module.exports = routes;
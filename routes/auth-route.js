const express = require('express');
const authRouter = express.Router();


authRoute.post('/login', (req, res) => {
    res.render('login');
});

authRoute.post('/register', (req, res) => {
    res.render('register');
});

module.exports = authRoute;
const express = require('express');
const { login, register } = require('../controllers/auth.controller');

const route = express.Router();


route.post('/login', login)
route.post('/regis', register)


module.exports = route
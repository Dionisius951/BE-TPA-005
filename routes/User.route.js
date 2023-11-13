const express = require('express');
const { getAllUser, getUserByID, addUser, editUserByID, deleteUserByID } = require('../controllers/User.controller');

const route = express.Router();


route.get('/', getAllUser)
route.get('/:id', getUserByID)
route.post('/', addUser)
route.put('/:id', editUserByID)
route.delete('/:id', deleteUserByID)


module.exports = route
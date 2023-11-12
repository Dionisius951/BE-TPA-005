const express = require('express');
const { getAllTodo, getTodoByID } = require('../controllers/Todo.controller');
const route = express.Router();


route.get('/', getAllTodo)
route.get('/:id', getTodoByID)
// route.post('/', sebuah fungsi)
// route.put('/:id', sebuah fungsi)
// route.delete('/:id', sebuah fungsi)


module.exports = route
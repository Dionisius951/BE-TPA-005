const express = require('express');
const { getAllTodo, getTodoByID, AddTodo } = require('../controllers/Todo.controller');
const route = express.Router();


route.get('/', getAllTodo)
route.get('/:id', getTodoByID)
route.post('/', AddTodo)
// route.put('/:id', sebuah fungsi)
// route.delete('/:id', sebuah fungsi)


module.exports = route
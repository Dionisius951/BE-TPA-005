const express = require('express');
const { getAllTodo, getTodoByID, AddTodo, EditTodoByID, DeleteTodoByID,  } = require('../controllers/Todo.controller');
const route = express.Router();


route.get('/', getAllTodo)
route.get('/:id', getTodoByID)
route.post('/', AddTodo)
route.put('/:id', EditTodoByID)
route.delete('/:id', DeleteTodoByID)


module.exports = route
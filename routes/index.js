const express = require('express')
const route = express.Router()
const TodoRoutes = require('./Todo.route')

route.use('/todos', TodoRoutes)


module.exports = route
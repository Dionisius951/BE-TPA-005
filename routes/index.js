const express = require('express')
const route = express.Router()
const TodoRoutes = require('./Todo.route')
const UserRoutes = require('./User.route')

route.use('/todos', TodoRoutes)
route.use('/users', UserRoutes)


module.exports = route
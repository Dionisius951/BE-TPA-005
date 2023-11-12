const Todos = require("../models/todo.model")

module.exports = {
    getAllTodo : (req,res) => {
        res.status(200).json({
            message : "Berhasil mendapat data todos",
            todos : Todos
    })},

    AddTodo : (req,res) => {
        const data = req.body;        

        const newTodo = {
            id : Todos.length+1,
            value : data.value
        }

        Todos.push(newTodo)
        res.status(200).json({
            message : "berhasil menambah data",
            todo : Todos,
    })
    },

    getTodoByID : (req,res) => {
        const {id} = req.params
        const todo = Todos.find(todo => todo.id == id )

        res.status(200).json({
            message : "Berhasil mendapat data todos",
            todos : todo
        })
    },

    EditTodoByIDD : (req,res) => {
        
    },
    
    DeleteTodoByID : (req,res) => {
        
    }
}
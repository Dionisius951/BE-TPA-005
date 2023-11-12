const Todos = require("../models/todo.model")

module.exports = {
    getAllTodo : (req,res) => {
        res.status(200).json({
            message : "Berhasil mendapat data todos",
            todos : Todos
    })},

    AddTodo : (req,res) => {
        
    },

    getTodoByID : (req,res) => {

    },

    EditTodoByIDD : (req,res) => {
        
    },
    
    DeleteTodoByID : (req,res) => {
        
    }
}
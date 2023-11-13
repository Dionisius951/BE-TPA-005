const { Todo } = require("../models");

module.exports = {
  getAllTodo: async (req, res) => {
    try {
      const data = await Todo.findAll();

      res.status(200).json({
        message: "berhasil mendapatkan data todos",
        todos: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  },

  // AddTodo: (req, res) => {
  //   const data = req.body;

  //   const newTodo = {
  //     id: Todos.length + 1,
  //     value: data.value,
  //   };

  //   Todos.push(newTodo);
  //   res.status(200).json({
  //     message: "berhasil menambah data",
  //     todo: Todos,
  //   });
  // },

  // getTodoByID: (req, res) => {
  //   const { id } = req.params;
  //   const todo = Todos.find((todo) => todo.id == id);

  //   res.status(200).json({
  //     message: "Berhasil mendapat data todos",
  //     todos: todo,
  //   });
  // },

  // EditTodoByID : (req, res) => {
  //   const  { id }  = req.params;
  //   const updateValue = req.body;

  //   const todo = Todos.map((todo) => {
  //     if (todo.id == id) {
  //       return { ...todo, value : updateValue.value };
  //     }
  //     return todo
  //   });
  //   res.status(201).json({
  //     message: "Berhasil mengedit todos",
  //     todos: todo,
  //   });
  // },

  // DeleteTodoByID: (req, res) => {
  //   const  {id}  = req.params;

  //   const deleteTodo = Todos.filter(todo =>  todo.id != id);

  //   res.status(200).json({
  //     message: "Berhasil mendapat data todos",
  //     todos: deleteTodo,
  //   });
  // },
};

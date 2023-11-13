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

  AddTodo: async (req, res) => {
    const data = req.body;
    await Todo.create(data);

    res.status(201).json({
      message: "berhasil menambahkan data todos",
      todos: data,
    });
  },

  getTodoByID: async (req, res) => {
    const { id } = req.params;
    const data = await Todo.findAll({where:{id : id}});

    if (data.length === 0){
      res.status(400).json({
        message: `todo dengan id : ${id} tidak ditemukan`
      })
    }

    res.status(200).json({
      message: `Berhasil mendapat data todos dengan id : ${id}`,
      todos: data,
    });
  },

  EditTodoByID : async (req, res) => {
    const  { id }  = req.params;

    await Todo.update({ value: req.body.value }, {
      where: {
        id: id
      }
    });


    res.status(201).json({
      message: `Berhasil mengedit todo dengan id ${id}`,
      todos : Todo
    });
  },

  DeleteTodoByID: async (req, res) => {
    const  {id}  = req.params;

    await Todo.destroy({
      where: {
        id: id
      }
    });

    res.status(200).json({
      message: `Berhasil menghapus data todo dengan id ${id}`,
      todos: Todo,
    });
  },

  deleteAllTodos: async (req, res) => {

    await Todo.destroy({
      truncate: true
    });

    res.status(200).json({
      message: `Berhasil menghapus semua data todos`,
      todos: Todo,
    });
  },
};

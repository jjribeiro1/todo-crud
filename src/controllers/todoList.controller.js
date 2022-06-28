const todoListService = require("../services/todoList.service");

const getAllTasks = (req, res) => {
  const response = todoListService.findAll();
  res.send({ data: response });
};

const getTaskById = (req, res) => {
  const id = Number(req.params.id);
  const response = todoListService.findById(id);

  if (!response) {
    res.status(400).send({ message: "Tarefa não encontrada" });
  } else {
    res.status(200).send({ data: response, message: "Tarefa encontrada" });
  }
};

const create = (req, res) => {
  const newTask = req.body;
  const response = todoListService.create(newTask);

  if (!newTask.nome || !newTask.prioridade) {
    res.status(400).send({ message: "Dados da tarefa incompletos" });
  } else {
    res
      .status(201)
      .send({ data: response, message: "Tarefa criada com sucesso" });
  }
};

const update = (req, res) => {
  const id = Number(req.params.id);
  const updatedTask = req.body;
  const response = todoListService.update(id, updatedTask);
  if (response !== undefined) {
    res
      .status(200)
      .send({ data: response, message: "Tarefa editada com sucesso" });
  } else {
    res.status(400).send({ message: "Tarefa não encontrada" });
  }
};

const deleteTask = (req, res) => {
  const id = Number(req.params.id);
  const response = todoListService.deleteTask(id);
  res.send({ data: response, message: "Tarefa excluída com sucesso" });
};

module.exports = {
  getAllTasks,
  getTaskById,
  create,
  update,
  deleteTask,
};

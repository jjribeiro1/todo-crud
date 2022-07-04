const todoListService = require("../services/todoList.service");
const mongoose = require("mongoose");

const getAllTasks = async (req, res) => {
  try {
    const response = await todoListService.findAll();

    if (response.length == 0) {
      return res
        .status(404)
        .send({ message: "Não existe nenhuma tarefa cadastrada" });
    }
    res.send({ data: response });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const getTaskById = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await todoListService.findById(id);

    res.status(200).send({ data: response, message: "Tarefa encontrada" });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const create = async (req, res) => {
  try {
    const newTask = req.body;
    const response = await todoListService.create(newTask);
    res
      .status(201)
      .send({ data: response, message: "Tarefa criada com sucesso" });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedTask = req.body;
    const response = await todoListService.update(id, updatedTask);
    res
      .status(200)
      .send({ data: response, message: "Tarefa editada com sucesso" });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const updatePatch = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedTask = req.body;
    const response = await todoListService.updatePatch(id, updatedTask);
    res
      .status(200)
      .send({ data: response, message: "Tarefa editada com sucesso" });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await todoListService.deleteTask(id);
    res
      .status(200)
      .send({ data: response, message: "Tarefa excluída com sucesso" });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  create,
  update,
  updatePatch,
  deleteTask,
};

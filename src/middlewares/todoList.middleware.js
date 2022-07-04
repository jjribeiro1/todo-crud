const mongoose = require("mongoose");
const List = require("../model/List");

const idValidation = (req, res, next) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "ID inválido" });
  }
  next();
};

const bodyValidation = (req, res, next) => {
  const newTask = req.body;
  if (!newTask.nome || !newTask.prioridade) {
    return res.status(400).send({ message: "Dados da tarefa incompletos" });
  }
  next();
};

const bodyPatchValidation = (req, res, next) => {
  const task = req.body;
  if (!task.nome && !task.prioridade) {
    return res.status(400).send({ message: "Dados da tarefa incompletos" });
  }
  next();
};

const alreadyExists = async (req, res, next) => {
  const newTask = req.body;
  const dbTask = await List.findOne(newTask);

  if (dbTask !== null) {
    return res.status(400).send({ message: "Essa tarefa já existe" });
  }
  next();
};

const notFound = async (req, res, next) => {
  const task = await List.findById(req.params.id);

  if (!task) {
    return res.status(404).send({ message: "Tarefa não encontrada" });
  }
  next();
};

module.exports = {
  idValidation,
  bodyValidation,
  bodyPatchValidation,
  alreadyExists,
  notFound,
};

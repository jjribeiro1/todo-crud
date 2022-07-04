const List = require("../model/List");

const findAll = async () => await List.find();

const findById = async (id) => await List.findById(id);

const create = async (newTask) => await List.create(newTask);

const update = async (id, updatedTask) => await List.findByIdAndUpdate(id, updatedTask).setOptions({returnOriginal: false});

const updatePatch = async (id, updatedTask) => await List.findByIdAndUpdate(id, updatedTask).setOptions({returnOriginal: false});

const deleteTask = async (id) => await List.findByIdAndDelete(id);

module.exports = {
  findAll,
  findById,
  create,
  update,
  updatePatch,
  deleteTask,
};

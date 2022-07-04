const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
  nome: { type: "string", required: true },
  prioridade: { type: "string", required: true },
});

const List = mongoose.model("List", ListSchema, "list");

module.exports = List;

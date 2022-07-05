const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
  nome: { type: "string", required: true },
  prioridade: { type: "string", required: true },
});

// terceiro parametro pra evitar pluralização da coleção no mongoose
const List = mongoose.model("list", ListSchema, "list" );

module.exports = List;

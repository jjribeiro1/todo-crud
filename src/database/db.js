const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose
    .connect("mongodb://localhost:27017/todolist", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to mongoDB"))
    .catch((err) => console.log(`Erro na conexão com o banco: ${err}`));
};

module.exports = connectToDatabase;

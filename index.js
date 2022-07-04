const express = require('express');
const cors = require('cors');
const route = require('./src/routes/todoList.route');
const app = express();
const PORT = 3000;
const connectToDatabase = require('./src/database/db')

connectToDatabase()

app.use(cors());

app.use(express.json());

app.use('/list', route);



app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

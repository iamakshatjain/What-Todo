// essentials
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");

// routes
const {createTodo, getTodos, updateTodo, deleteTodo} = require("./routes/Todos");
const {createTask, getTasks, updateTask, deleteTask} = require("./routes/Completed");

// configurations
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// applying routes
// Todos
app.post('/t', createTodo);
app.get('/t', getTodos);
app.put('/t/:id', updateTodo);
app.delete('/t/:id', deleteTodo);
// Completed
app.post('/c', createTask);
app.get('/c', getTasks);
app.put('/c/:id', updateTask);
app.delete('/c/:id', deleteTask);

app.get('/', (req, res) => {
    res.send("Working fine Sir");
});

app.listen(process.env.PORT, process.env.IP, () => {
    console.log(`At your service sir on port ${process.env.PORT}!`);
});
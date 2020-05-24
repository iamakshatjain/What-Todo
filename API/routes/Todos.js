// to make process data available
const dotenv = require("dotenv");
dotenv.config();

// creating a new pool
const {Pool} = require("pg");
const config = {
    user : process.env.DBUSER,
    host : process.env.DBHOST,
    database : process.env.DBNAME,
    password : process.env.DBPASS,
    port : process.env.DBPORT 
};
const pool = new Pool(config);

// CREATE
const createTodo = (req, res) => {
    let todo = req.body;
    pool.query("INSERT INTO todos (task, priority, done, created_at, completed_at) VALUES ($1, $2, $3, $4, $5) RETURNING *", 
        [todo.task, todo.priority, todo.done, todo.created_at, todo.completed_at], 
        (err, result) => {
            if(err){
                console.error(err);
                res.send({error : err.message});
            } else{
                const insertID = result.rows[0].id;
                res.status(200).send({id:insertID});
            }
        });
}

// READ
const getTodos = (req, res) => {
    pool.query("SELECT * FROM todos ORDER BY priority ASC", 
        (err, result) => {
            if(err){
                console.error(err);
                res.send({error : err.message});
            } else {
                res.status(200).json(result.rows);
            }
        });
}

// UPDATE
const updateTodo = (req, res) => {
    const todo_id = parseInt(req.params.id);
    const todo = req.body;
    pool.query("UPDATE todos set task=$1, priority=$2, done=$3, created_at=$4, completed_at=$5 WHERE id=$6 RETURNING *", 
        [todo.task, todo.priority, todo.done, todo.created_at, todo.completed_at, todo_id], 
        (err, result) => {
            if(err){
                console.error(err);
                res.send({error : err.message});
            } else{
                const updatedID = result.rows[0].id;
                res.status(200).send({id:updatedID});
            }
        });
}

// DELETE
const deleteTodo = (req, res) => {
    const todo_id = parseInt(req.params.id);
    pool.query("Delete FROM todos WHERE id=$1 RETURNING *", 
        [todo_id], 
        (err, result) => {
            if(err){
                console.error(err);
                res.send({error : err.message});
            } else{
                const deletedID = result.rows[0].id;
                res.status(200).send({id:deletedID});
            }
        });
}

module.exports = {createTodo, getTodos, updateTodo, deleteTodo};
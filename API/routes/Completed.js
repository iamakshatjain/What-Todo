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
const createTask = (req, res) => {
    let task = req.body;
    pool.query("INSERT INTO completed (task, priority, done, created_at, completed_at) VALUES ($1, $2, $3, $4, $5) RETURNING *", 
        [task.task, task.priority, task.done, task.created_at, task.completed_at], 
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
const getTasks = (req, res) => {
    pool.query("SELECT * FROM completed ORDER BY priority ASC", 
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
const updateTask = (req, res) => {
    const task_id = parseInt(req.params.id);
    const task = req.body;
    pool.query("UPDATE completed set task=$1, priority=$2, done=$3, created_at=$4, completed_at=$5 WHERE id=$6 RETURNING *", 
        [task.task, task.priority, task.done, task.created_at, task.completed_at, task_id], 
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
const deleteTask = (req, res) => {
    const task_id = parseInt(req.params.id);
    pool.query("Delete FROM completed WHERE id=$1 RETURNING *", 
        [task_id], 
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

module.exports = {createTask, getTasks, updateTask, deleteTask};
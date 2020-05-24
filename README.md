# What-Todo

Made with React by [Akshat Jain](https://www.linkedin.com/in/iamakshtjain)

A simple todolist with following features :

- Prioritization of task
- Seperate columns for All, Completed, Pending Tasks
- Fast and Fluent User Experience

## Handled Test Cases
- Can't create multiple todos with same task
- Can't create empty todo
- Can't update completed task directly

## API Description

### Completed Routes
- CREATE - `/c` - POST : To create a new completed task
    - Success Response : `{ id : <ID of inserted task> }`
- READ - `/c` - GET : To get all the completed tasks
- UPDATE - `/c/:id` - POST/PUT : To update completed task with ID as `id`
- DELETE - `/c/:id` - DELETE : To delete completed task with ID as `id`

### Todos Routes
- CREATE - `/t` - POST : To create a new todo task
    - Success Response : `{ id : <ID of inserted task> }`
- READ - `/t` - GET : To get all the todo tasks
    - Success Response : `[{ <task> }]`
- UPDATE - `/t/:id` - POST/PUT : To update todo task with ID as `id`
- DELETE - `/t/:id` - DELETE : To delete todo task with ID as `id`

*Error Response : `{ error : <error message> }`*

## Database (Postgres)

whattodo : Database Name

- Todos : Table for all the todos
    - Constraints
        - The `done` variable must be `NOT NULL` and `false`
        - The `created_at` variable must be `NOT NULL`

- Completed : Table for all the completed tasks
    - Constraints
        - The `done` variable must be `NOT NULL` and `true`
        - The `completed_at` variable must be `NOT NULL`

## Network Optimisation
- Request for getting tasks is made only once when the app loads 


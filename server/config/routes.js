const users = require('../controller/tasks.js');
module.exports = function (app) {
    //Retrieve all Tasks
    app.get('/tasks', (req, res) => {
        users.GetAllTasks(req, res);
    });
    //Retrieve a Task by ID
    app.get('/tasks/:id/', (req, res) => {
        users.GetTaskById(req, res);
    });
    //Create a Task
    app.post('/tasks', (req, res) => {
        users.newTask(req, res);
    });
    //Update a Task by ID
    app.put('/tasks/:id/', (req, res) => {
        users.EditTask(req, res);
    });
    //Delete a Task by ID
    app.delete('/tasks/:id/', (req, res) => {
        users.DeleteTask(req, res);
    });
}
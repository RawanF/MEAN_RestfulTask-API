const tasks = require('../controller/tasks.js');
module.exports = function (app) {
    //Retrieve all Tasks
    app.get('/tasks', (req, res) => {
        tasks.GetAllTasks(req, res);
    });
    //Retrieve a Task by ID
    app.get('/tasks/:id/', (req, res) => {
        tasks.GetTaskById(req, res);
    });
    //Create a Task
    app.post('/tasks', (req, res) => {
        tasks.newTask(req, res);
    });
    //Update a Task by ID
    app.put('/tasks/:id/', (req, res) => {
        tasks.EditTask(req, res);
    });
    //Delete a Task by ID
    app.delete('/tasks/:id/', (req, res) => {
        tasks.DeleteTask(req, res);
    });
}